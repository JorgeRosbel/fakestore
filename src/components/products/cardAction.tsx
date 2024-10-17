import { Product } from "../../api/api.types";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export const CardAction:React.FC<Omit<Product, "id" | "description" | "category" | "images" | "title">> = ({price}) => {

    return (
        <div className="flex items-center justify-between w-full">
            <span className="text-black dark:text-white font-bold text-[23px]">${price}</span>
            <button  className="text-black dark:text-white text-[30px]"><MdOutlineAddShoppingCart /></button>
        </div>
    )
}
