import {Thumbnail } from "./thumbnail";
import { Price } from "./price";
import { Quantity } from "./quantity";
import { Delete } from "./delete";
import { CartProduct } from "@hooks/useCart";

export const ProductRow:React.FC<Omit<CartProduct, "categoryID">> = ({title,price,image,category,amount,id}) => {
   
    return(
        <tr id="--product-cart-row">
            <Thumbnail title={title} image={image} category={category} />
            <Price price={price} />
            <Quantity id={id} amount={amount} />
            <Price price={amount * price} />
            <Delete id={id} />
        </tr>
    )
}