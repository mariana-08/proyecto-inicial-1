import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
// import { Button } from "react-bootstrap"; 
import NavbarBootstrap from "./components/NavbarBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer";
//import Button from "./examples/Button";
// import FetchCountry from "./examples/FetchCountry";
// //ejemplo de fetch para paises con useEffect y useState 
// import FetchData from "./examples/FetchData";
// //ejemplo de fetch para pokemones y dragon ball con map y useEffect

// import {withLogging} from "./hocs/withLogging";
// import Hello from "./examples/Hello";
// esto de arriba es un ejemplo de HOC (High Order Component) que es una funcion que recibe un componente y devuelve otro componente con funcionalidades adicionales.
// en este caso el HOC es withLogging que recibe el componente Hello y le agrega un console.log cuando se monta el componente.
// el HOC se puede usar para agregar funcionalidades a cualquier componente sin modificar el componente original.

function App() {  
console.log('Hola soy App')

//const HelloConLoging = withLogging(Hello)
 
  return (
    <>     
      <NavbarBootstrap/>
      <ItemListContainer greeting='Bienvenidos a mi primer App ❤ ' />   
      {/* <FetchCountry/>  */}
      {/* <FetchData/>
      <HelloConLoging/> */}
      {/* aca trabajaremos con la 2da preentrega */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
