import { useParams } from "react-router-dom";

import { Pagination } from "../products/promoContent";

export const SingleCategory:React.FC = () => {
    const {id} = useParams();
  
    return(
        <div className="w-full max-w-[1200px] flex items-center justify-center min-h-screen py-4">
            <Pagination categoryId={id} />
        </div>
    )
}