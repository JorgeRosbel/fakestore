import { Stars } from "./stars";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Image } from "./imageCard";
import { Promo } from "./card.types";
import { useCart } from "../../hooks/useCart";

export const ProductCard: React.FC<Promo> = ({ title, price, image, category,id, categoryID }) => {
    const {addProduct,update} = useCart();

    const handleAddProduct = () => {
        addProduct({ title, price, image, category,id, amount:1, categoryID});
        update();
    }


    return (
        <article id="--product-cart" className="w-full h-full rounded-sm flex flex-col items-center animate-fade
        justify-start bg-light-accent dark:bg-dark-secondary py-3 px-1 shadow-[2px_2px_10px_rgba(0,0,0,0.5)]">
            <Image title={title} image={image} category=""  categoryID={categoryID} />

            <div className=" w-[80%] flex flex-col py-3 items-start justify-between flex-1">
                <span className="text-black dark:text-white font-semibold text-[15px] text-opacity-50 dark:text-opacity-50">{category}</span>
                <span className="text-black dark:text-white font-semibold text-[18px]">{title}</span>
                <Stars credit={Math.random() * 5 | 0} />


                <div className="flex items-center justify-between w-full">
                    <span className="text-black dark:text-white font-bold text-[23px]">${price}</span>
                    <button onClick={handleAddProduct} className="text-black dark:text-white text-[30px]"><MdOutlineAddShoppingCart /></button>
                </div>
            </div>
        </article>
    )
}

import { BsImage } from "react-icons/bs";

export const ProductCardSkelleton: React.FC = () => {
   

    return (
        <article id="--product-cart" className="w-full h-full rounded-sm flex flex-col items-center 
        justify-start bg-light-accent dark:bg-dark-secondary py-3 px-1 shadow-[2px_2px_10px_rgba(0,0,0,0.5)]">
            <div className="w-[80%] min-h-[200px] min-w-[200px] bg-slate-400 animate-pulse flex items-center justify-center ">
                <BsImage  className="text-[50px] text-slate-600 text-opacity-75" />
            </div>

            <div className=" w-[80%] gap-3 flex flex-col py-3 items-start justify-between flex-1">
                <div className="bg-slate-400 h-[24px] w-full animate-pulse rounded-md" ></div>
                <div className="bg-slate-400 h-[24px] w-full animate-pulse rounded-md"></div>
                <div className="bg-slate-400 h-[24px] w-full mt-4 animate-pulse rounded-md"></div>
            </div>
           
        </article>
    )
}