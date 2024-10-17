import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Product } from './api.types';


interface Params{
  titleParam:string;
  price_minParam:string;
  price_maxParam:string;
}


export const useFetchProducts = ({ titleParam,price_minParam,price_maxParam  }: Params ) => {
  const fetchFn = async ({ pageParam = 0 }: { pageParam: number }): Promise<Product[]> => {
    console.log("Call API REST");
    // const endpoint = `https://api.escuelajs.co/api/v1/products?offset=${pageParam}&limit=8&title=${titleParam}&price_min=${price_minParam}&price_max=${price_maxParam}`;
    const endpoint = `https://api.escuelajs.co/api/v1/products?offset=${pageParam}&limit=8${titleParam ? `&title=${encodeURIComponent(titleParam)}` : ''}${price_minParam ? `&price_min=${price_minParam}` : ''}${price_maxParam ? `&price_max=${price_maxParam}` : ''}`;


    try {
      const response = await axios.get<Product[]>(endpoint);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("Error al obtener los productos: " + error.message);
      }
      throw new Error("Error al obtener los productos");
    }
  };

  return useInfiniteQuery({
    queryKey: ["products", titleParam, price_minParam, price_maxParam],
    queryFn: fetchFn,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      // Si la última página tiene menos de 8 productos, asumimos que no hay más productos
      if (lastPage.length < 8) return undefined;
      // Retornar el próximo offset
      return pages.length * 8;
    },
    staleTime: 1000 * 60 * 20,
    refetchOnWindowFocus: false
  });
};



