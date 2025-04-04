import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
// import { Button } from "react-bootstrap"; 
import NavbarBootstrap from "./components/NavbarBootstrap";
//import Button from "./examples/Button";

function App() {  
console.log('Hola soy App')
  return (
    <>     
      <NavbarBootstrap/>
      <ItemListContainer greeting='Bienvenidos a mi primer App ❤ ' />    
    </>
  );
}

export default App;
