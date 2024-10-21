import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useCart } from "@hooks/useCart";

interface Quant{
    id:number;
    amount:number;
}


export const QuantityMobile: React.FC<Quant> = ({id,amount}) => {
    const {addProduct,update,removeProduct,customAmount,products} = useCart();

    const handleQuantity = (action:string) => {

        return () => {

            //find product by id
            const target = products.find(item => item.id === id);

            if(target !== undefined) {

                if(action === "increment"){
                    addProduct({...target, amount:amount+1})
                }else{
                    removeProduct(id)
                }
                
                update();
            }
        }

    }

    const handleQuantityInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        customAmount(id,Number(value));
        update();
    }


    return (
        <div id="--row-quantity" className="border-black  w-[100px] text-center">
            <div className="flex items-center justify-center gap-4 p-1 bg-light-accent dark:bg-dark-accent rounded-[7px]">
                <button onClick={handleQuantity("increment")}>
                    <FaPlus className="font-bold text-[1.2rem] text-green-600 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-50" />
                </button>
                <input 
                    onChange={handleQuantityInput} 
                    type="number" 
                    min="1" 
                    value={amount} 
                    className="w-[30px] text-black dark:text-white rounded text-center no-spinner bg-light-accent dark:bg-dark-accent outline-none 
                    border-solid border-black dark:border-white border-[1px] border-opacity-25 dark:border-opacity-25" />
                <button onClick={handleQuantity("decrement")}>
                    < FaMinus className="font-bold text-[1rem] text-red-600 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-50" />
                </button>
            </div>
        </div>
    )
}