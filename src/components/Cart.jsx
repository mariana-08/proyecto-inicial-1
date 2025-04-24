import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

const Cart = () => {
    const {cart} = useContext(CartContext) //uso el contexto con useContext y le paso el contexto a usar
  return (
    <div>
        {
          cart.length 
          ? <CartView/> //aca  muestra el contenido q esta en el componente CartView si el carrito tiene algo
          : <EmptyCart/> //aca si el carrito tiene algo lo muestra sino va al componente EmptyCart de carrito vacio y muestra ese contenido
        }
    </div>
  )
}

export default Cart
