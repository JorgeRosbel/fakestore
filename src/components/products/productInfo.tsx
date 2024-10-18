import { useFetchSingleProduct } from "../../api/useFetchSingleProdcut";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "../../api/api.types";
import { Stars } from "./stars";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useFetchProductsbyCategories } from "../../api/useFetchProductsbyCategories";
import { Promo } from "./card.types";

const PreviewProduct:React.FC<{images:string[]}> = ({images}) => {
    const [currentImage,setImage] = useState<string>(images[0]);
    const [active,setActive] = useState(0);


    const changeImage = (url:string, id:number) => {
        return () => {
            setImage(url);
            setActive(id);
        }
    }

    useEffect(()=> {
        setImage(images[0])
    },[images])

    


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

const Description:React.FC<Product> = ({id,title,category,description,price,images}) => {

    const {addProduct,update} = useCart();

    const handleAddProduct = () => {
        
        addProduct({ title, price, image:images[0], category:category.image,id, amount:1, categoryID: category.id});
        update();
    }
   

    return(
        <div id={`--product-id-${id}`} className="flex-1 flex flex-col items-center justify-center gap-3 w-full p-4 min-w-[340px] 
         sm:min-h-screen">
            <div className="w-full bg-light-secondary p-4 rounded-sm dark:bg-dark-secondary" id="--titles">
                <h2 className="text-[35px] font-semibold text-black dark:text-white">{title}</h2>
                <h3 className="text-black dark:text-white uppercase font-[600] text-opacity-50 dark:text-opacity-50">{category.name}</h3>
            </div>

            <div id="--description" className="flex flex-col justify-evenly gap-3 bg-light-secondary dark:bg-dark-secondary p-4 rounded-sm">
                <div id="--price" className="flex items-center text-black dark:text-yellow-500">
                    <p className="text-[14px]  h-[35px]">US$</p>
                    <p className="text-[40px] ">{price}</p>
                    <p className="text-[14px]  h-[35px]">00</p>
                </div>
                <Stars  credit={4}/>
                <p className="text-[18px] text-black dark:text-white">{description}</p>
                
                <div className="flex gap-3 w-full items-center justify-center">
                    <button onClick={handleAddProduct} className="text-[15px] flex items-center justify-center gap-1 w-full sm:w-[180px] bg-black text-white dark:bg-yellow-500 uppercase px-3 py-2 
                    font-semibold rounded-[3px] transition-all duration-300 hover:shadow-[2px_4px_20px_rgba(0,0,0,.3)]">
                        Add to cart <MdOutlineAddShoppingCart />
                    </button>
                    <button  className="bg-light-accent dark:bg-dark-primary w-[40px] h-[40px] flex items-center justify-center border-[1px] border-solid border-black dark:border-white border-opacity-25 rounded-md">
                        <CiHeart className="text-[26px] text-red-500"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

const RelatedCard:React.FC<Promo> = ({ title, price, image, category,id, categoryID }) => {

    return(
        <article className="relative min-h-[200px] min-w-[200px]" id={String(id)}>
            <img width="100%" height="100%" src={image} alt={`image-${title}`} className="w-full rounded-sm" />

            <Link to={`/fakestore/products/${title}/${categoryID}`}>
                <div className="absolute p-2 flex flex-col justify-between items-center left-0 top-0 w-full h-full bg-dark-primary 
                bg-opacity-30 cursor-pointer z-10 transition-all duration-300 hover:bg-opacity-50" id={String(categoryID )}>
                    <div className="flex items-center justify-between w-full text-white text-opacity-75">
                        <p className="font-[600]">{title}</p>
                        <p className="font-bold text-[20px]">${price}</p>
                    </div>
                    <div className="text-white text-opacity-75">{category}</div>
                </div>
            </Link>
            
           
        </article>
    )
}

const RelatedProducts:React.FC = () => {
    const {id} = useParams();
    const {status,error,data} = useFetchProductsbyCategories(id ? id : "");




    return(
        <div id="--related-products" className="w-full grid promo-grid gap-4 py-4">
            {
                status === "pending" ? <div>Loading...</div>:
                status === "error"   ? <p>{error.message}</p>:
                Array.from({length:4}, (_,i) => data.filter(v => v.id !== Number(id))[i] ).map(product => <RelatedCard 
                                        key={product.id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.images[0]}
                                        category={product.category.name}
                                        id={product.id}
                                        categoryID={product.category.id} />)
            }
        </div>
    )
}

import { useCart } from "../../hooks/useCart";

export const ProductGeneralInfo:React.FC = () => {
    const {name} = useParams();
    const {status,error,data} = useFetchSingleProduct({productName: name ? name: ""});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return(
        <section className="w-full min-h-screen flex items-center justify-center animate-fadez">
            {
                status === "pending" ? <p>Loading...</p> :
                status === "error" ? <p>{error.message}</p> :
                <article className="w-full max-w-[1200px]">
                    <div className="w-full flex items-center justify-center flex-wrap lg:items-start lg:justify-between">
                        <PreviewProduct images={data[0].images} />
                        <Description    id={data[0].id} 
                                        title={data[0].title}
                                        category={data[0].category}
                                        description={data[0].description}
                                        price={data[0].price}
                                        images={data[0].images}
                                        />
                    </div>
                    <RelatedProducts />
                </article>
            }
        </section>
    )
}
