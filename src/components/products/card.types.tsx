import { Product } from "../../api/api.types";

export interface Promo extends Omit<Product,"id" | "description"| "category" | "images">{
    image:string;
    category:string;
}