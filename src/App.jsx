import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"; 
import NavbarBootstrap from "./components/NavbarBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { CartProvider } from "./context/CartContext"; // importamos el proveedor del carrito


function App() {   

  return (
    <BrowserRouter>     
    <CartProvider> {/*envolvemos los componentes con el proveedor CartProvider */}
    <NavbarBootstrap/>      
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a mi primer App ❤ ' /> }/> 
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Estas en la categoria: 👌' /> }/>      
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;

