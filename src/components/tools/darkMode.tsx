import { CgDarkMode } from "react-icons/cg";
import { useRef, useEffect } from "react";

export const DarkMode:React.FC = () => {
    const refBtn = useRef<HTMLButtonElement>(null);
    
    useEffect(()=>{
        const html = document.querySelector("html") as HTMLElement;
        const toggleDarkMode = () => html.classList.toggle("dark");
        const button = refBtn.current;
        if(button){
            button.addEventListener("click", toggleDarkMode)
        }

        return () => {
            if (button) {
                button.removeEventListener("click", toggleDarkMode);
            }
        };
    },[])
    return(
        <button ref={refBtn}><CgDarkMode className="text-black dark:text-white text-[26px] cursor-pointer" /></button>
    )
}