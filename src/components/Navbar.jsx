// import '../styles/Navbar.css' esto se usa si quiero hacer el css desde la carpeta styles
//import Button from '../examples/Button';
import CartWidget from './CartWidget';

const Navbar =() => {
  // const cart = () => {
  //   alert('Carrito de compras')
  // }

  return (
    <nav className="navContainer">
      <img src='../Logo-shop.png' alt='Logo de shop' className='logo'/>
      <div className="a-container">
        <a>Nuevos</a>
        <a>Ofertas</a>
        <a>Más vendidos</a>
      </div>
      {/* <Button text='' style='' handler={cart} /> */}
      <CartWidget/>
    </nav>
  )

}
export default Navbar;