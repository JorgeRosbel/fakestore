export const ProductList:React.FC<{children:React.ReactNode}> = ({children}) => {

    return(
        <div className="w-full sm:w-[60%] max-w-[1200px] p-3 bg-light-secondary dark:bg-dark-secondary rounded-md animate-fade">
            <table className="w-full">
                <thead className="border-black border-opacity-20 dark:border-white dark:border-opacity-20 border-solid border-b-[2px]">
                    <tr className="text-black dark:text-white  uppercase text-opacity-50 dark:text-opacity-70 h-[40px] ">
                        <th className="text-start">Product</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Total</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}