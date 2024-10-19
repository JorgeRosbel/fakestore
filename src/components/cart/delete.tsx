import { MdDeleteForever } from "react-icons/md";
import { useCart } from "@hooks/useCart";

export const Delete: React.FC<{id:number}> = ({id}) => {

    const {update,deleteProduct} = useCart();

    const handleDeleteProduct = () => {
        deleteProduct(id);
        update();
    }

    return (
        <td id="--row-delete" className="border-black border-opacity-20 dark:border-white dark:border-opacity-20 w-[90px] border-solid border-b-[2px] text-center">
            <button onClick={handleDeleteProduct}>
                <MdDeleteForever className="text-[1.7rem] text-red-700 transition-all duration-300 hover:scale-110" />
            </button>
        </td>
    )
}