

export const Message:React.FC<{message:string}> = ({message}) => {

    return(
        <div className="w-full overflow-hidden uppercase absolute top-0 h-[50px] bg-light-accent font-semibold 
        flex items-center px-3 ">
            {/* <div className="w-full max-w-[1200px] relative overflow-hidden bg-red-600">
                <span className="animate-slider">
                    {message}
                </span>
            </div> */}
            <div className="animate-slider flex items-center gap-10">
                <span className="text-[18px]">
                        {message}
                </span>
                |
                <span className="text-[18px]">
                        {message}
                </span>
                |
                <span className="text-[18px]">
                        {message}
                </span>
            </div>
        </div>
    )
}