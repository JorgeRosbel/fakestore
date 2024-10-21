

export const ProductListMobile:React.FC<{children:React.ReactNode}> = ({children}) => {

    return(
        <div className="bg-light-secondary dark:bg-dark-secondary transition-all duration-300 p-1 rounded-[6px] mobile-h overflow-x-hidden">
            {children}
        </div>
    )
}