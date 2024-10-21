import { useCart } from "@hooks/useCart"

interface Ord{
    text:string;
    value:string | number;
    bold?:boolean;
}

const OrderInfo: React.FC<Ord> = ({ text, value,bold }) => {


    return (
        <div className={`flex items-center  gap-2 w-full text-black text-opacity-55
         dark:text-white dark:text-opacity-65 ${bold && "font-semibold text-opacity-100 dark:text-opacity-100"} `}>
            <p>{text}</p>
            <p>{value}</p>
        </div>
    )
}

export const Order:React.FC = () => {
    const {total,counter} = useCart();

    const summary:Ord[] = [
        {text: "Products:", value: counter, bold:false},
        {text: "Shopping Fee~:", value: `$${(total*.02).toFixed(2)}`, bold:false},
        {text: "Subtotal:", value: `$${total}`, bold:false},
        {text: "Total:", value: `$${(total + total*.02).toFixed(2)}`, bold:true},
    ]

    return(
        <div className="w-full h-min fixed bottom-0 sm:static sm:flex-1 flex items-center flex-col bg-light-secondary dark:bg-dark-secondary p-3 gap-3 animate-fade">
            <h2 className="text-center font-semibold text-[1.2rem] text-black dark:text-white">Your Order</h2>
            
            <div className="w-full">
            { summary.map((value,index) => <OrderInfo 
                                            key={index} 
                                            text={value.text} 
                                            value={value.value}
                                            bold={value.bold}/>) }
            </div>
    
            
            <button className="bg-green-500 w-[120px] py-1 rounded text-white font-semibold">
                Checkout
            </button>
        </div>
    )
}


