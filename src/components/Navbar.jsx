// import '../styles/Navbar.css' esto se usa si quiero hacer el css desde la carpeta styles
//import Button from '../examples/Button';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';

const Navbar =() => {
  // const cart = () => {
  //   alert('Carrito de compras')
  // }

  return (
    <nav className="navContainer">
      <NavLink to='/' > 
      <img src='../Logo-shop.png' alt='Logo de shop' className='logo'/>
      </NavLink>
      <div className="a-container">
        <NavLink to='/category/nuevos'>Nuevos</NavLink>
        <NavLink to='/category/ofertas'>Ofertas</NavLink>
        <NavLink to='/category/mas vendidos'>Más vendidos</NavLink>
      </div>
      {/* <Button text='' style='' handler={cart} /> */}
      <CartWidget/>
    </nav>
  )

}
export default Navbar;

// aca lo que agregue hoy en la clse 5 es navbar sin librerias de bootstrap 
