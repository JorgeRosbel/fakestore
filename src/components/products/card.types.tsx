import { Product } from "../../api/api.types";

export interface Promo extends Omit<Product,"description"| "category" | "images">{
    image:string;
    category:string;
    categoryID:number;
}