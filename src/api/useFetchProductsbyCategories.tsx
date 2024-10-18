import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./api.types";


export const useFetchProductsbyCategories = (id:string) => {

    const endpoint = `https://api.escuelajs.co/api/v1/categories/${id}/products`;
    
    const fetchFn = async (): Promise<Product[]> => {
        
        try {
            const response = await axios.get<Product[]>(endpoint);
            return response.data;
        }
        catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error("Error al obtener los productos " + error.message)
            } else if (axios.isAxiosError(error)) {
                throw new Error("Error al obtener los productos " + error.message)
            }
            else {
                throw new Error("Error al obtener los productos")
            }
        }
    }


    return useQuery({
        queryKey:["product-by-categorires", id],
        queryFn: fetchFn,
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus:false,
        refetchOnReconnect:true
    })
}