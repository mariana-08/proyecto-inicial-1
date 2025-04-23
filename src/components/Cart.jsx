import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const{cart} = useContext(CartContext) 
  return (
    <div>
        {
            Cart.length ? <h1>Carrito lleno:</h1> : <h1>Carrito vacio</h1>
        }
    </div>
  )
}

export default Cart
