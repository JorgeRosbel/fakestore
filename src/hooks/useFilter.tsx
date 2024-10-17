import { create } from "zustand";

interface FilterState{
    title: string;
    setTitle: (newTitle: string) => void;
    price_min: string;
    setPriceMin: (newPrice_min: string) => void;
    price_max: string;
    setPriceMax: (newPrice_max: string) => void;
    category: { id: number, name: string };
    setCategory: (newCategory: { id: number, name: string }) => void;
    
}


export const useFilter = create<FilterState>(set => ({
    title:"",
    price_min:"",
    price_max:"",
    category: {id:-1, name:""},
    setTitle: (newTitle: string) => set({ title: newTitle }),
    setPriceMin: (newPrice_min: string) => set({ price_min: newPrice_min }),
    setPriceMax: (newPrice_max: string) => set({ price_max: newPrice_max }),
    setCategory: (newCategory: { id: number, name: string }) => set({ category: newCategory })
}))