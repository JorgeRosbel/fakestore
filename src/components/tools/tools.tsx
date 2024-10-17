import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { DarkMode } from "./darkMode";


export const Tools:React.FC = () => {
   

    return(
        <div className="flex gap-3 items-center">
            <Link to="/fakestore/user">
                <FaRegUser className="text-black dark:text-white text-[22px] cursor-pointer"/>
            </Link>
            <Link to="/fakestore/favorites">
                <FaRegHeart className="text-black dark:text-white text-[22px] cursor-pointer"/>
            </Link>
            <button><MdOutlineShoppingCart className="text-black dark:text-white text-[25px]" /></button>
            <DarkMode />
        </div>
    )
}