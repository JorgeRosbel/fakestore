import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Category } from "./api.types";


export const useFetchCategories = () => {

    const fetchFn = async (): Promise<Category[]> => {
        const endpoint = `https://api.escuelajs.co/api/v1/categories`;

        try {
            const response = await axios.get<Category[]>(endpoint);
            return response.data;
        }
        catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error("Error fetching the products: " + error.message)
            } else if (axios.isAxiosError(error)) {
                throw new Error("Error fetching the products: " + error.message)
            }
            else {
                throw new Error("Error fetching the products")
            }
        }
    }


    return useQuery({
        queryKey:["all-products"],
        queryFn: fetchFn,
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus:false,
        refetchOnReconnect:true
    })
}