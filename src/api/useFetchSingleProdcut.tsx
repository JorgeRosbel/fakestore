import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./api.types";

export const useFetchSingleProduct = ({productName}:{productName:string}) => {

    const endpoint = `https://api.escuelajs.co/api/v1/products/?title=${productName}`;

    const fetchFn = async():Promise<Product[]> => {

        try{
            const response = await axios.get<Product[]>(endpoint);
            return response.data;
        }
        catch(error:unknown){

            if (axios.isAxiosError(error)) {
                throw new Error("Error fetching the product: " + error.message);
            } else if (error instanceof Error) {
                throw new Error("Error fetching the product: " + error.message);
            } else {
                throw new Error("Error fetching the product");
            }
        }
    }

    return useQuery({
        queryKey: ["single-product", productName],
        queryFn: fetchFn,
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false
    })
}