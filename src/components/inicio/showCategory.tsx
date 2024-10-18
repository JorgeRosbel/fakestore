import { Category } from "../../api/api.types";
import { useFetchCategories } from "../../api/useFetchCategories";
import { useState } from "react";
import { Spinner } from "../products/imageCard";
import { Link } from "react-router-dom";

const CategoryCard:React.FC<Category> = ({id,name,image}) => {
    const [isLoading,setLoading] = useState<boolean>(true);

    return(
        <article id={`--category-card-${id}`} className=" min-h-[200px] bg-light-accent dark:bg-dark-secondary min-w-[200px]
         relative flex flex-col items-center justify-center">
            <Spinner isLoading={isLoading} />
            <img
                src={image}
                alt={`category-image-${name}`}
                width="100%"
                height="100%"
                onLoad={() => setLoading(false)}
                className={`w-full aspect-square ${isLoading ? "hidden" : "block"}`} />
            <Link to={`/fakestore/category/${name}/${id}`}>
                <div className="absolute top-0 left-0 p-3 bg-black bg-opacity-25 w-full h-full transition-all 
                duration-500 hover:shadow-[5px_5px_20px_rgba(0,0,0,.3)] dark:hover:shadow-[10px_10px_20px_rgba(255,255,255,.3)]">
                    <p className="text-[22px] text-white">{name}</p>
                </div>
            </Link>
        </article>
    )
}


export const CategoryContent:React.FC = () => {
    const {status,error,data} = useFetchCategories();

    return status === "pending" ? <div>Loading...</div>:
    status === "error" ? <div>{error.message}</div>:
    <div className="w-full max-w-[1200px] flex flex-col items-center justify-center py-3">
        <h2 className="text-[30px] font-semibold text-black dark:text-white">Categories</h2>
        <div className="w-full p-4 grid promo-grid place-content-center gap-3">
        {data.map(value => <CategoryCard    key={value.id} 
                                            id={value.id} 
                                            name={value.name} 
                                            image={value.image} />)}
        </div>
    </div>
}

