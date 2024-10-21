import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { DarkMode } from "./darkMode";
import { useCart } from "../../hooks/useCart";

const HoverMessage: React.FC<{message:string}> = ({message}) => {

    return (
        <div className="absolute  -translate-x-[30%] bg-light-accent text-black dark:bg-dark-accent dark:text-white font-semibold rounded-[7px] p-2 top-1/2  -translate-y-1/2 invisible  opacity-0 transition-all duration-300 
                group-hover:translate-y-1/2 group-hover:visible group-hover:opacity-100 select-none">
            {message}
        </div>
    )
}

export const Tools: React.FC = () => {

    const { counter } = useCart();

    return (
        <div className="flex gap-3 items-center">
            <Link to="/fakestore/user" className="relative group">
                <FaRegUser className="text-black dark:text-white text-[22px] cursor-pointer" />
                <HoverMessage message="Profile" />
            </Link>
            <Link to="/fakestore/favorites" className="relative group">
                <FaRegHeart className="text-black dark:text-white text-[22px] cursor-pointer" />
                <HoverMessage message="Favorites" />
            </Link>
            <div className="relative group flex cursor-pointer">
                <DarkMode />
                <HoverMessage message="Theme" />
            </div>
            <Link to="/fakestore/cart" className="flex  relative group ">
                <button><MdOutlineShoppingCart className="text-black dark:text-white text-[25px]" /></button>
                <div className="bg-red-600 w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-0 bottom-0 translate-x-1/2 translate-y-1">
                    <span className="text-white text-[12px]">{counter}</span>
                </div>
                <HoverMessage message="Cart" />
            </Link>
        </div>
    )
}