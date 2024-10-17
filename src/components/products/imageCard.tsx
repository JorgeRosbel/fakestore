import { Promo } from "./card.types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export const Image:React.FC<Omit<Promo, "category" | "price" >> = ({image,title}) => {
    const [isLoading,setIsloading] = useState<boolean>(true);
    const handleLoadImage = () => setIsloading(false);

    return (
        <div className="w-[80%] min-h-[200px] min-w-[200px]" >
            {isLoading && <div className="bg-light-accent dark:bg-dark-accent w-full h-full flex items-center justify-center">
                <div className="w-[70px] h-[70px] border-solid border-[5px] border-light-secondary border-t-black dark:border-dark-white dark:border-t-yellow-500 rounded-full animate-spin"></div>
            </div>}
            <Link to={`/products/${title}`} className="relative">
            <img onLoad={handleLoadImage}
                src={image}
                width="100%"
                height="100%"
                alt={title}
                className={`w-full ${isLoading ? "hidden": "block"} peer transition-all duration-300 hover:shadow-[2px_5px_15px_rgba(0,0,0,.4)]`} />
                <FaEye className="absolute right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 text-[20px]
                 text-white opacity-0 transition-all duration-300 peer-hover:opacity-100 hover:opacity-100" />
            </Link>
            
        </div>
    )
}