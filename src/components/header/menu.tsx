import { Link } from "react-router-dom";
import { NavBarState} from "./menu.types";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";
import { Links } from "./menu.types";




export const NavBar:React.FC<NavBarState> = ({visible}) => {
    
    const links:Links[] = [
        {path: "/fakestore", text: "Home"},
        {path: "/fakestore/products", text: "Products"},
        {path: "/fakestore/contact", text: "Contact"}
    ]

    return(
        <nav className={`flex flex-col z-20 gap-3 fixed overflow-hidden min-h-screen justify-center items-center bg-light-secondary lg:bg-light-secondary dark:bg-dark-primary
        left-0 top-0 sm:flex sm:flex-row sm:static sm:min-h-min ${visible ? "w-[70%] sm:w-full" : "w-0 sm:w-full"} transition-all duration-300 sm:transition-none`}>
            {links.map((v,id) => <Link key={`link-menu-${id}`} to={v.path} className="text-black dark:text-white text-[18px] font-[600]">{v.text}</Link>)}
        </nav>
    )
}

export const Menu:React.FC = () => {
    const [visible,setVisible] = useState<boolean>(false);
    const handleMenu = () => setVisible(!visible)

    return(
        <> 
        {visible ? <button className="block sm:hidden" onClick={handleMenu}><RiCloseLargeFill className="relative z-50 text-[30px] text-black dark:text-white" /></button> : <button className="block sm:hidden" onClick={handleMenu}><HiMenuAlt2 className="relative z-50 text-[30px] text-black dark:text-white" /></button> }
        <div className="flex gap-3 items-center">
            <Link to="/fakestore/" className="font-bold text-[23px] flex items-center text-black dark:text-white">DEMO</Link>
            <NavBar visible={visible} />
        </div>
        <div className={`${visible ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"} fixed w-full min-h-screen -z-10
        top-0 left-0 bg-black dark:bg-white bg-opacity-25 dark:bg-opacity-25 backdrop-blur-[3px] dark:backdrop-blur-[3px] transition-all duration-300`}></div>
        </>
    )
}