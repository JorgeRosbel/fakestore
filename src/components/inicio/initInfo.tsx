import { Link } from "react-router-dom";
import Hero from "../../assets/hero.webp";
import { Message } from "./message";


export const InitInfo:React.FC = () => {

    return(
        <section 
        style={{
            backgroundImage: `url(${Hero})`, 
            backgroundPosition: "center center", 
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }}
        className="w-full relative  bg-light-accent dark:bg-dark-secondary min-h-custom mt-[50px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="uppercase font-bold text-[50px] sm:text-[75px] text-center text-white relative z-10 gap-3">
                    fake store API
                </h1>
                <div className="flex items-center gap-10 relative z-10">
                   <Link to="/fakestore/products">
                    <button className="bg-black uppercase font-bold text-white rounded-sm p-3 text-[18px]">
                        Comprar ahora
                    </button>
                   </Link>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full min-h-custom bg-black bg-opacity-35">

            </div>
            <Message message="Exclusive deals on our best products! Don't miss out!" />
        </section>
    )
}