import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"; 
import NavbarBootstrap from "./components/NavbarBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
// importamos el proveedor del carrito
import { CartProvider } from "./context/CartContext"; 


function App() {   

  return (
    <BrowserRouter>     
    <CartProvider> {/*envolvemos los componentes con el proveedor para que tengan acceso al contexto */}
    <NavbarBootstrap/>      
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a mi primer App ❤ ' /> }/> 
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Estas en la categoria: 👌' /> }/>      
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        {/* <Route path='/cart' element={ <Cart/> } /> */}
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;

