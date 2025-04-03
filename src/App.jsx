import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
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
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a mi primer App ❤ ' />
     

      {/* <ItemListContainer nombre={nombre} apellido='Therisod' mayor={true} /> */}
      {/* aca se puede pasar cualquier formato de props como se ve en ItemListContainer */}
      
      {/* Ejemplos de  props */}
      {/* <Button text='Hola Coders 😃' style='button-purple' handler={saludar} />
      <Button text='log in' style='button-gray' handler={login} disabled={true}/> */}
    </>
  );
}

export default App;
