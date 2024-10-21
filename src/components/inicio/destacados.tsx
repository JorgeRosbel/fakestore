import { useFetchSingleProduct } from "../../api/useFetchSingleProdcut";
import { ProductCard, ProductCardSkelleton } from "../products/card";

export const Destacados:React.FC<{productName:string}> = ({productName}) => {
    const {status,data,error} = useFetchSingleProduct({productName});


    return(
        <>
            {
                status === "pending" ? <div  className="grid promo-grid place-items-center gap-3 w-full flex-1  px-4">
                <ProductCardSkelleton />
              
                </div> :
                    status === "error" ? <p className="text-red-600 font-bold">{error.message}</p> :
                        <ProductCard
                            id = {data[0].id}
                            title={data[0].title}
                            image={data[0].images[0]}
                            category={data[0].category.name}
                            price={data[0].price} categoryID={data[0].category.id} />
            }
        </>
    )
}

export const DestacadosContent:React.FC = () => {

    return(
        <section className="w-full flex flex-col items-center justify-center py-4 px-4 gap-4 min-h-screen">
            <h2 className="text-[30px] font-semibold text-black dark:text-white">Featured Products</h2>
            <div className="w-full max-w-[1200px] grid promo-grid gap-4">
                <Destacados productName="Sleek Futuristic Electric Bicycle" />
                <Destacados productName="Rainbow Glitter High Heels" />
                <Destacados productName="Elegant Purple Leather Loafers"/>
                <Destacados productName="Radiant Citrus Eau de Parfum"/>
            </div>
        </section>
    )
}