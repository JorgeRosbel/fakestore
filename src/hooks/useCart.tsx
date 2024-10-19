import { create } from "zustand";
import { Promo } from "@components/products/card.types";

export interface CartProduct extends Promo{
    id:number;
    amount:number;
}

interface CartState{
    products:CartProduct[];
    total: number,
    counter:number;
    addProduct: (newProduct:CartProduct) => void;
    removeProduct: (productID:number) => void;
    deleteProduct: (productID:number) => void;
    customAmount: (productID:number,quantity:number) => void;
    update: () => void;
}

export const useCart = create<CartState>(set => ({
    products:[],
    total: 0,
    counter:0,
    addProduct: (newProduct) => {
        set( state => {
            const existingProduct = state.products.find( value => value.id === newProduct.id);

            if(!existingProduct){
                return ({products: [...state.products, newProduct] })
            }
            else{
                return ({products: state.products.map(product => 
                    product.id === existingProduct.id 
                    ? {...product, amount: product.amount + 1} 
                    : product
                )})
            }
        } )
    },
    removeProduct: (productID) => {
        set(state => {
            const target = state.products.find(product => product.id === productID);
            
            if(target){
                if(target.amount >=1){
                    //remove -1
                    return ({products: state.products.map(product => 
                            product.id === target.id 
                            ? {...product, amount: product.amount - 1} 
                            : product)})
                }else{
                    //delete product fomr cartlist
                    return ({products: state.products.filter(product => product.id !== target.id)}) 
                };
            }else{ return ({products:[...state.products]})}
            
        })
    },
    deleteProduct: (productID) => {
        set(state => {
            const target = state.products.find(product => product.id === productID);
            return ({products: state.products.filter(product => product.id !== target?.id)}) 
        })
    },
    customAmount: (productID,quantity) => {
        set( state => {
            
            return ({products: state.products.map(product => 
                product.id === productID 
                ? {...product, amount: quantity} 
                : product)})
        })
    } ,
    update: () => {
        set( state => {
            const total_amount = state.products.reduce((acc,current) =>  acc + (current.price * current.amount) , 0 );
            const counter = state.products.reduce((acc,current) => acc + current.amount ,0);

            return ({total: total_amount ,counter: counter })
        } )
    }

}))

