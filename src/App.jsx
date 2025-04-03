import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Button } from "react-bootstrap"; 
import NavbarBootstrap from "./components/NavbarBootstrap";

//import Button from "./examples/Button";

function App() {  

  // const nombre = "Laura"
  // const saludar=() => {
  //   alert('Holis')
  // }
  // const login = () => {
  //   console.log('Holaaaa')
  // }

  return (
    <>
      {/* <Navbar/> */}
      <NavbarBootstrap/>
      <ItemListContainer greeting='Bienvenidos a mi primer App ❤ ' />
      <button className="btn btn-primary" >Hola</button>
      <Button variant="dark">Holasss</Button>

      {/* <ItemListContainer nombre={nombre} apellido='Therisod' mayor={true} /> */}
      {/* aca se puede pasar cualquier formato de props como se ve en ItemListContainer */}
      
      {/* Ejemplos de  props */}
      {/* <Button text='Hola Coders 😃' style='button-purple' handler={saludar} />
      <Button text='log in' style='button-gray' handler={login} disabled={true}/> */}
    </>
  );
}

export default App;
