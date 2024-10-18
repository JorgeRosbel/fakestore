import { useFetchSingleProduct } from "../../api/useFetchSingleProdcut";
import { ProductCard } from "../products/card";

export const Destacados:React.FC<{productName:string}> = ({productName}) => {
    const {status,data,error} = useFetchSingleProduct({productName});

    return(
        <>
            {
                status === "pending" ? <div>Loading...</div> :
                    status === "error" ? <div>{error.message}</div> :
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
                <Destacados productName="Trendy Pink-Tinted Sunglasses" />
                <Destacados productName="Sleek All-Terrain Go-Kart"/>
                <Destacados productName="Sleek All-Terrain Go-Kart"/>
            </div>
        </section>
    )
}