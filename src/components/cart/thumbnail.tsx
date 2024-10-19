import { CartProduct } from "@hooks/useCart";

export const Thumbnail:React.FC<Omit<CartProduct, "categoryID" | "price" | "amount" | "id">> = ({title,image,category}) => {


    return(
        <td id="--row-product" className="border-black dark:border-white dark:border-opacity-20 border-opacity-20 border-solid border-b-[2px]">
            <div className="flex items-center gap-3 py-2 w-max">
                <img
                    width="100"
                    height="100"
                    src={image}
                    alt={`image-${title}`}
                    className="w-[100px] aspect-square rounded" />
                <div>
                    <p className="text-black dark:text-white">{title}</p>
                    <p className="text-black dark:text-white text-opacity-55 dark:text-opacity-55">{category}</p>
                </div>
            </div>
        </td>
    )
}