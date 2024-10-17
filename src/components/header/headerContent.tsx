import { Tools } from "../tools/tools";
import { Menu } from "./menu";

export const Header:React.FC = () => {

    return(
        <header className="w-full flex items-center justify-center fixed top-0 left-0 px-2 lg:px-0 dark:bg-dark-primary 
        bg-light-secondary z-[99999]">
            <div className="w-full flex items-center justify-between max-w-[1200px] p-2 h-[50px]">
                <Menu  />
                <Tools />
            </div>
        </header>
    )
}
