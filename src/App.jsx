import { Routes, Route} from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

const App = () => {

    return (
      <>
          <ScrollToTop/>
          <Routes>
              <Route index element={ <Home/> }></Route>
              <Route path="/producto/:id" element={ <ProductDetails /> }></Route>
          </Routes>
          <footer className='container-fluid bg-black'>
            <p className='text-center py-4 text-white text-sm m-0'>&copy; 2024. Todos los derechos reservados.</p>
          </footer>
      </>
    );
};
export default App;