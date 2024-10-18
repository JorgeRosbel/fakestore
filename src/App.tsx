import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Header } from "./components/header/headerContent";
import { InitInfo } from "./components/inicio/initInfo";
import { Prodcuts } from "./components/products/promoContent";
import { ProductGeneralInfo } from "./components/products/productInfo";
import { CategoryContent } from "./components/inicio/showCategory";
import { SingleCategory } from "./components/inicio/showSingleCategory";
import { DestacadosContent } from "./components/inicio/destacados";
import { Final } from "./components/inicio/final";
import { Cart } from "./components/products/cart";


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
              <Final />
              </>
              } />
            <Route path="/fakestore/products" element={<> <Prodcuts /><Header /> </>} />
            <Route path="/fakestore/products/:name/:id" element={<><Header /><ProductGeneralInfo /></>} />
            <Route path="/fakestore/category/:name/:id" element={<> <Header /><SingleCategory /></> }/>
            <Route path="/fakestore/cart/" element={<Cart />}/>
          </Routes>
        </Router>
        
    </main>
  )
}

export default App
