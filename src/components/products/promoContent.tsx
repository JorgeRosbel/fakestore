import { useFetchProducts } from "../../api/useFetchProducts";
import { ProductCard } from "./card";
import { useEffect} from "react";
import { FormFilter } from "./formFilter";
import { useFilter } from "../../hooks/useFilter";
import { useInView } from "react-intersection-observer";
import { Params } from "../../api/useFetchProducts";
import { Spinner } from "./imageCard";

export const Prodcuts:React.FC = () => {
    const {title,price_max,price_min} = useFilter();

    return(
        <section id="--promo" className="w-full flex flex-col items-center min-h-custom max-w-[1200px] mt-10 mb-3">
            <div className="flex items-center justify-between w-full">
                <h2 className="py-3 text-black dark:text-white font-semibold text-[30px]">Products</h2>
               
            </div>
            <div className="flex w-full items-start gap-3 relative">
                <FormFilter isLoading={false}/>
                <Pagination titleParam={title}
                            price_minParam={price_min}
                            price_maxParam={price_max} />
            </div>
           
        </section>
    )
}


export const Pagination: React.FC<Params> = ({titleParam,price_minParam,price_maxParam,categoryId}) => {

 
 
  const { data,fetchNextPage, status, error } = useFetchProducts({ titleParam, price_minParam,price_maxParam,categoryId });
  const { ref, inView} = useInView();

  console.log(data?.pages)

  useEffect(() => {
    if (inView) { fetchNextPage() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return status === "pending" ? <Spinner isLoading={status === "pending"} /> :
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
        <div ref={ref}></div>
      </div>
}