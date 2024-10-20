import { useCart } from "@hooks/useCart";
import { type Sort } from "@hooks/useCart";
import { useState } from "react";

export const ProductList:React.FC<{children:React.ReactNode}> = ({children}) => {
    const {sortBy} = useCart();
    const [active,setActive] = useState<string>('');

    const sortItems = (mode:Sort) => {

        return () => {
            sortBy(mode);
            setActive(mode);
        }
    }

    return(
        <div className="w-full sm:w-[80%] max-w-[1200px] p-3 bg-light-secondary dark:bg-dark-secondary rounded-md animate-fade">
            <table className="w-full bg-light-secondary dark:bg-dark-secondary">
                <thead className="border-black border-opacity-20 dark:border-white dark:border-opacity-20 border-solid border-b-[2px]">
                    <tr className="text-black dark:text-white  uppercase text-opacity-50 dark:text-opacity-70 h-[40px] ">
                        <th className={`text-center cursor-pointer ${active === "product" && "text-green-700"}`} onClick={sortItems("product")}>Product</th>
                        <th className={`text-center cursor-pointer ${active === "price" && "text-green-700"}`} onClick={sortItems("price")}>Price</th>
                        <th className={`text-center cursor-pointer ${active === "quantitiy" && "text-green-700"}`}  onClick={sortItems("quantitiy")}>Quantity</th>
                        <th className="text-center">Total</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {children}
                </tbody>
            </table>
        </div>
    )
}