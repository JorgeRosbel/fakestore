import { CartProduct } from "@hooks/useCart";
import { QuantityMobile } from "./quantityMobile";

export const ThumbnailMobile:React.FC<Omit<CartProduct, "categoryID">> = ({title,image,price,category,amount,id}) => {

    return(
        <div className="flex gap-2 p-1 w-full border-solid border-b-[1px] border-b-black rounded-sm 
        dark:border-b-white dark:border-opacity-20 border-opacity-20 transition-all duration-300 hover:bg-light-accent hover:dark:bg-dark-accent">
            <img width="10" height="100" className="w-[100px] h-[100px] aspect-square" src={image} alt={title} />
            <div className="w-[70%]">
                <p className="font-semibold text-black dark:text-white">{title}</p>
                <p className="text-black dark:text-white text-opacity-60">{category}</p>
                <div className="flex items-center justify-between">
                    <p className="text-black dark:text-white font-semibold">${price}</p>
                    <QuantityMobile id={id} amount={amount} />
                </div>
            </div>
        </div>
    )
}

