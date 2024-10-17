import { RiStarSFill } from "react-icons/ri";
import { NStars } from "./stars.types";

export const Stars:React.FC<NStars> = ({credit}) => {
    const ql:boolean[] = Array.from({length:5}, (_,i) => i < credit ? true: false);


    return (
        <div className="flex text-[20px] py-2">
            {
            ql.map((value,id) => value ? <RiStarSFill key={id} className="text-yellow-500" /> 
            : <RiStarSFill key={id} className="text-black dark:text-light-secondary text-opacity-25 dark:text-opacity-25" /> )}
        </div>
    )
}
