import { Stars } from "./stars";
import { CardAction } from "./cardAction";
import { Image } from "./imageCard";
import { Promo } from "./card.types";

export const ProductCard:React.FC<Promo> = ({title,price,image,category}) => {
 
    return(
        <article id="--product-cart" className="w-full h-full rounded-sm flex flex-col items-center animate-fade
        justify-start bg-light-accent dark:bg-dark-secondary py-3 px-1 shadow-[2px_2px_10px_rgba(0,0,0,0.5)]">
            <Image title={title} image={image} />
            
            <div className=" w-[80%] flex flex-col py-3 items-start justify-between flex-1">
                <span className="text-black dark:text-white font-semibold text-[15px] text-opacity-50 dark:text-opacity-50">{category}</span>
                <span className="text-black dark:text-white font-semibold text-[18px]">{title}</span>
                <Stars credit={Math.random() * 5 | 0}/>
                <CardAction price={price} />
            </div>
        </article>
    )
}