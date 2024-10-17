import { useFetchProducts } from "../../api/useFetchProducts";
import { ProductCard } from "./card";
import { useEffect, useState } from "react";
import { FormFilter } from "./formFilter";
import { useFilter } from "../../hooks/useFilter";


const useNear = () => {
    const [isNear,setNear] = useState<boolean>(false);
  
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
      
          if (scrollTop + windowHeight >= documentHeight) {
            console.log("Has llegado al final de la página.");
            setNear(true);
            console.log(true)
           
          }else{
            if(isNear !== false){setNear(false)}
            console.log(false)
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [isNear]);

    return {isNear,setNear}
}

export const Prodcuts:React.FC = () => {

    return(
        <section id="--promo" className="w-full flex flex-col items-center min-h-custom max-w-[1200px] mt-10 mb-3">
            <div className="flex items-center justify-between w-full">
                <h2 className="py-3 text-black dark:text-white font-semibold text-[30px]">Products</h2>
               
            </div>
            <div className="flex w-full items-start gap-3 relative">
                <FormFilter isLoading={false}/>
                <Pagination />
            </div>
           
        </section>
    )
}


const Pagination: React.FC = () => {

  //hasNextPage,
  //isFetching,
  //isFetchingNextPage,

  const {title,price_max,price_min} = useFilter();
  const { data,fetchNextPage, status, error } = useFetchProducts({ titleParam: title, price_minParam:price_min,price_maxParam:price_max });
  const { isNear } = useNear();

  useEffect(() => {
    if (isNear) { fetchNextPage() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNear])

  return status === "pending" ? <div>Loading...</div> :
    status === "error" ? <div>{error.message}</div> :
      <div className="w-full flex flex-col gap-2">
        {data.pages.map((page, currentPage) => <div key={currentPage} className="grid promo-grid place-items-center gap-3 w-full flex-1  px-4">
          {page.map((item) => <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.images[0]}
            category={item.category.name} />)}
        </div>)}
      </div>
}