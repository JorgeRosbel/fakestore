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