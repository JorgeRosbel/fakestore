import final from "../../assets/final.webp"

export const Final:React.FC = () => {


    return(
        <section style={{
            backgroundImage: `url(${final})`,
            backgroundPosition: "center center", 
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }} 
        className="w-full min-h-screen flex flex-col gap-4 items-center justify-center relative">
            <h3 className="text-white font-bold text-[40px] relative z-20">Texto Extra de Promo 50%</h3>
            <h4 className="text-white font-bold text-[40px] relative z-20" >H02FK</h4>
            <div className="absolute top-0 left-0 w-full min-h-screen bg-black bg-opacity-35">

            </div>
        </section>
    )
}