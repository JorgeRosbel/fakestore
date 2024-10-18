import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { Pagination } from "../products/promoContent";

export const SingleCategory:React.FC = () => {
    const {id, name} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  

    return(
        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center min-h-custom mt-[60px] py-4">
            <h2 className="text-dark dark:text-white text-[25px] font-semibold mb-3 uppercase">{name}</h2>
            <Pagination categoryId={id} />
        </div>
    )
}

