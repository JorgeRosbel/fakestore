import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Header } from "./components/header/headerContent";
import { InitInfo } from "./components/inicio/initInfo";
import { Prodcuts } from "./components/products/promoContent";
import { ProductGeneralInfo } from "./components/products/productInfo";
import { CategoryContent } from "./components/inicio/showCategory";
import { SingleCategory } from "./components/inicio/showSingleCategory";
import { DestacadosContent } from "./components/inicio/destacados";


const  App:React.FC = () => {

  return(
    <main id="--main-page" className="w-full min-h-screen bg-light-primary flex flex-col items-center dark:bg-dark-primary">
  
        <Router>
          <Routes>
            <Route path="/fakestore" element={
              <>
              <Header />
              <InitInfo/>
              <DestacadosContent />
              <CategoryContent />
              </>
              } />
            <Route path="/fakestore/products" element={<> <Prodcuts /><Header /> </>} />
            <Route path="/fakestore/products/:name" element={<ProductGeneralInfo />} />
            <Route path="/fakestore/category/:id" element={<SingleCategory />}/>
          </Routes>
        </Router>
        
    </main>
  )
}

export default App
