import { useFilter } from "../../hooks/useFilter";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

interface Form{
    title:string;
    maxPrice:string;
    minPrice:string;
}


export const FormFilter: React.FC<{isLoading:boolean}> = ({isLoading}) => {
    const {setTitle,setPriceMax,setPriceMin}  = useFilter();
    const [menuVisible,setMenuVisible] = useState<boolean>(false);
    const [formState,setFormState] = useState<Form>({
        title:"",maxPrice:"",minPrice:""
    })
    const handleInput = (id:string) => {
        
        return (event:React.ChangeEvent<HTMLInputElement>) => {
            const {value} = event.target;
            setFormState({...formState, [id]: value })
        }
    }

    const handeSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, maxPrice, minPrice} = formState;
        setTitle(title);
        setPriceMax(maxPrice);
        setPriceMin(minPrice);
    }

    const handleMenu = () => setMenuVisible(!menuVisible);

    return (
        <>
        <form onSubmit={handeSearch} className={` w-full p-3 lg:w-[25%] rounded-[20px] bg-light-accent text-black dark:bg-dark-secondary 
         dark:text-white top-[50px] ms:top-[70px] flex flex-col items-start justify-center sm:justify-start py-10 gap-3 ${menuVisible ? "opacity-100 visible" : "invisible opacity-0"}  fixed z-10 sm:sticky sm:visible sm:opacity-100
         transition-all duration-300`}>
            <label htmlFor="title" className="flex flex-col w-full">
                <span className="font-semibold">Search by Name</span>
                <input 
                    type="text" 
                    placeholder="ex: Elegant Patent"
                    id="title" 
                    value={formState.title} 
                    onChange={handleInput('title')}
                    className="w-full text-center rounded-[20px] outline-none bg-white border-solid border-black border-[1px] py-1
                        border-opacity-50 focus:border-opacity-100 dark:bg-dark-primary dark:border-white dark:border-opacity-45
                        dark:focus:border-opacity-100
                        transition-all duration-300"  />
            </label>
            <div className="flex gap-3 items-center justify-between">
                <label htmlFor="price_min">
                    <span className="font-semibold">Price Min</span>
                    <input 
                        type="number" 
                        id="price_min"
                        placeholder="ex:50"
                        value={formState.minPrice} 
                        onChange={handleInput("minPrice")}
                        className="w-full no-spinner text-center rounded-[20px] outline-none bg-white border-solid border-black border-[1px] py-1
                        border-opacity-50 focus:border-opacity-100 dark:bg-dark-primary dark:border-white dark:border-opacity-45
                        dark:focus:border-opacity-100
                        transition-all duration-300"  />
                </label>
                <label htmlFor="price_max" className="w-full">
                    <span className="font-semibold">Price Max</span>
                    <input 
                        type="number" 
                        placeholder="ex:1000"
                        id="price_max" 
                        className="w-full text-center no-spinner rounded-[20px] outline-none bg-white border-solid border-black border-[1px] py-1
                        border-opacity-50 focus:border-opacity-100 dark:bg-dark-primary dark:border-white dark:border-opacity-45
                        dark:focus:border-opacity-100
                        transition-all duration-300" 
                        value={formState.maxPrice} 
                        onChange={handleInput('maxPrice')} />
                </label>
            </div>
            <div className="w-full flex items-center justify-center py-4">
            <button 
                disabled={isLoading}
                className={`w-[50%] text-white opacity-75 bg-green-500 font-bold px-3 py-2 rounded-sm  
                ${isLoading && "opacity-45 cursor-not-allowed"} transition-all duration-300 hover:opacity-100`}>
                Search 
            </button>
            </div>
        </form>
        <button onClick={handleMenu} className="fixed z-50 bottom-0 right-1/2 text-[40px] translate-x-1/2 py-3 sm:hidden 
        w-full bg-white dark:bg-dark-primary text-black dark:text-white flex items-center justify-center">
            <FaFilter/>
        </button>
        

        </>
    )
}