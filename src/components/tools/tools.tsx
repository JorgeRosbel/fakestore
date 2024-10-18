import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { DarkMode } from "./darkMode";
import { useCart } from "../../hooks/useCart";


export const Tools:React.FC = () => {
   
    const {counter,total}  = useCart();
    console.log(total)
    return(
        <div className="flex gap-3 items-center">
            <Link to="/fakestore/user">
                <FaRegUser className="text-black dark:text-white text-[22px] cursor-pointer"/>
            </Link>
            <Link to="/fakestore/favorites">
                <FaRegHeart className="text-black dark:text-white text-[22px] cursor-pointer"/>
            </Link>
            <Link to="/fakestore/cart" className="flex items-end justify-end">
                <button><MdOutlineShoppingCart className="text-black dark:text-white text-[25px]" /></button>
               <div className="bg-red-600 w-[20px] h-[20px] flex items-center justify-center rounded-full">
                    <span className="text-white text-[12px]">{counter}</span>
               </div>
            </Link>
            <DarkMode />
        </div>
    )
}