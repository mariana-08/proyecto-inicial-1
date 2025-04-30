import React from 'react'
const CartItem = ({compra, removeItem}) => {
  return (
    <div>
        <div key={compra.id} style={{display: 'flex', justifyContent: 'space-between', border: '1px solid black', margin: '10px', padding: '10px'}}>
            <img src= {compra.img} alt={compra.name} style={{width: '10rem'}}/>
            <span>{compra.name}</span>
            <span>Cantidad: {compra.quantity}</span>
            <span>Precio: ${compra.price},00</span>
            <span>Precio final: ${compra.quantity * compra.price},00</span>
            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button> 
        </div>
    </div>
  )
}
export default CartItem
