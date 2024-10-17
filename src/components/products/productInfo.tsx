import { useFetchSingleProduct } from "../../api/useFetchSingleProdcut";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Product } from "../../api/api.types";
import { Stars } from "./stars";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const PreviewProduct:React.FC<{images:string[]}> = ({images}) => {
    const [currentImage,setImage] = useState<string>(images[0]);
    const [active,setActive] = useState(0);

    const changeImage = (url:string, id:number) => {
        return () => {
            setImage(url);
            setActive(id);
        }
    }

    return(
        <div className="w-1/2 min-w-[340px] flex flex-col items-center justify-center bg-white  sm:min-h-screen p-4 gap-5  dark:bg-dark-primary">
            <div className="flex gap-5 items-center justify-center">
                {images.map((image,id) => <img 
                                            width="100" 
                                            height="100" 
                                            key={id} 
                                            src={image}
                                            onClick={changeImage(image,id)}
                                            alt={`product-img-${id}`} 
                                            className={`w-[100px] aspect-auto cursor-pointer border-solid border-[3px] shadow-[2px_3px_10px_rgba(255,255,255,0.3)]
                                            ${active === id ? "border-black dark:border-yellow-500 scale-100 opacity-100" : "border-slate-300 scale-75 opacity-55"} transition-all duration-500`} />)}
            </div>
            <div className="max-w-[400px] overflow-hidden group shadow-[2px_4px_20px_rgba(0,0,0,.3)]">
                <img 
                    src={currentImage} 
                    width="400" 
                    height="400" 
                    className="w-[400px]  aspect-auto transition-all duration-500  group-hover:scale-150" alt="product-preview-image" />
            </div>
        </div>
    )
}

const Description:React.FC<Omit<Product, "images">> = ({id,title,category,description,price}) => {

    return(
        <div id={`--product-id-${id}`} className="flex-1 flex flex-col items-center justify-center gap-3 w-full p-4 min-w-[340px] 
        bg-light-secondary dark:bg-dark-secondary sm:min-h-screen">
            <div className="w-full" id="--titles">
                <h2 className="text-[35px] font-semibold text-black dark:text-white">{title}</h2>
                <h3 className="text-black dark:text-white uppercase font-[600] text-opacity-50 dark:text-opacity-50">{category.name}</h3>
            </div>

            <div id="--description" className="flex flex-col justify-evenly gap-3">
                <div id="--price" className="flex items-center text-black dark:text-yellow-500">
                    <p className="text-[14px]  h-[35px]">US$</p>
                    <p className="text-[40px] ">{price}</p>
                    <p className="text-[14px]  h-[35px]">00</p>
                </div>
                <Stars  credit={4}/>
                <p className="text-[18px] text-black dark:text-white">{description}</p>
                <button className="text-[20px] flex items-center gap-1 w-full sm:w-[180px] bg-black text-white dark:bg-yellow-500 uppercase px-3 py-2 
                font-semibold rounded-md transition-all duration-300 hover:shadow-[2px_4px_20px_rgba(0,0,0,.3)]">
                    Add to cart <MdOutlineAddShoppingCart />
                </button>
            </div>
        </div>
    )
}

export const ProductGeneralInfo:React.FC = () => {
    const {name} = useParams();
    const {status,error,data} = useFetchSingleProduct({productName: name ? name: ""});
   
   

    return(
        <section className="w-full min-h-screen flex items-center justify-center animate-fadez">
            {
                status === "pending" ? <p>Loading...</p> :
                status === "error" ? <p>{error.message}</p> :
                <article className="w-full  flex items-center justify-center flex-wrap lg:items-start lg:justify-between">
                    <PreviewProduct images={data[0].images} />
                    <Description    id={data[0].id} 
                                    title={data[0].title}
                                    category={data[0].category}
                                    description={data[0].description}
                                    price={data[0].price}  />
                </article>
            }
        </section>
    )
}
