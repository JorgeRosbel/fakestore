import { useCart} from "@hooks/useCart";
import { ProductList } from "./productList";
import { ProductRow } from "./productRow";
import { Order } from "./order";
import { ProductListMobile } from "./productListMobile";
import { ThumbnailMobile } from "./thumbnailMobile";


export const Cart:React.FC = () => {
    const {products} = useCart();

    return(
        <section id="--cart" className="w-full flex flex-col items-center min-h-custom mt-[50px]">
            <h2 className="text-[30px] text-black dark:text-white">Your Cart</h2>
            {
                innerWidth >= 950 && products.length > 0
                ? <div className="w-full flex max-w-[1200px] gap-2 items-start justify-center min-h-custom ">
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
                <Order />
                </div>
                : innerWidth < 950 && products.length > 0 ? <div className="w-full flex-col flex max-w-[1200px] gap-2 items-center sm:items-start justify-center  ">
                    <ProductListMobile>
                        {
                            products.map(product => <ThumbnailMobile id={product.id}
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                                amount={product.amount} />)
                        }
                    </ProductListMobile>
                    <Order />
                </div>
                : <div className="w-full flex max-w-[1200px] gap-2 items-start justify-center min-h-custom  ">
                    <p className="text-black dark:text-white font-semibold text-[20px] text-opacity-40 dark:text-opacity-40">
                    X - No hay productos en el cart - X
                    </p>
                </div>
            }
        </section>
    )
}