import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Button from './examples/Button'


function App() {

  const nombre = 'Marta'
  const saludar = () => {
    alert('Hola')
  }
  
  return (
    <>
      <Navbar />
      <ItemListContainer nombre={nombre} apellido='Cardozo' />
      <Button text='Hace click' style='button-primary' handler={saludar}/>
    </>
  )
}

export default App

