import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
    const {cart, removeItem,clear} = useContext(CartContext)
  return (
    <div>
     <h1>Tu carrito </h1>
        <div>
            {cart.map((compra) =>(
                <div key={compra.id} style={{display: 'flex', justifyContent: 'space-between', border: '1px solid black', margin: '10px', padding: '10px'}}>
                    <img src={compra.img} alt={compra.name} style={{width: '10rem'}}/>
                    <span>{compra.name}</span>
                    <span>Cantidad: {compra.cantidad}</span>
                    <span>Precio: ${compra.price},00</span>                    
                    <span>Precio final: ${compra.quantity * compra.price},00</span>
                    <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>
                </div>
            ))}            
        </div>
        <span>Total a pagar: $ </span>
        <button className='btn btn-danger' onClick={clear}>Borrar todo carrito</button>
        <button className='btn btn-success'>Finalizar compra</button>
        
    </div>
  )
}

export default CartView
