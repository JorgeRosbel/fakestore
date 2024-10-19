import { useCart} from "@hooks/useCart";
import { ProductList } from "./productList";
import { ProductRow } from "./productRow";


export const Cart:React.FC = () => {
    const {products} = useCart();

    return(
        <section id="--cart" className="w-full flex flex-col items-center min-h-custom mt-[50px]">
            <h2 className="text-[30px] text-black dark:text-white">Your Cart</h2>
            <ProductList>
                {
                    products.map(product => <ProductRow id={product.id}
                                                        key={product.id}
                                                        title={product.title}
                                                        price={product.price}
                                                        image={product.image}
                                                        category={product.category}
                                                        amount={product.amount} />)
                }
            </ProductList>
        </section>
    )
}