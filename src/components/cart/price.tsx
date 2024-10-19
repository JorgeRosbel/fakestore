

export const Price:React.FC<{price:number}> = ({price}) => {

    return(
        <td id="--row-price" 
        className="border-black dark:border-white border-opacity-20 dark:border-opacity-20 border-solid border-b-[2px] 
        w-[90px] text-center text-black dark:text-white">
                <p>${price}</p>
        </td>
    )
}