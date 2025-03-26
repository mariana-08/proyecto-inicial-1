import Button from '../examples/Button'
import '../styles/Navbar.css'

const Navbar = () => {
  const carrito = () => {
    alert('Carrito')
  } 
  // esto de arriba es un ejemplo de como se puede hacer un boton en el navbar con un alert

  return (
    <nav className="nav-container">  
          <a>Vinos Punilla</a> 
          <div className='a-container'>
            <a>Inicio</a>
            <a>Nuevos</a>
            <a>Ofertas</a>        
            <a>Más vendidos</a>
          </div>   
          {/* ejemplo de como poner otro boton aca */}
          <Button text='🛒' style='' handler={carrito} />
    </nav>
  )
}

export default Navbar