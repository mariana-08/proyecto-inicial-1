import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const CartView = () => {
  const {cart, clear, cartTotal} = useContext(CartContext) 
  const preConfirmation = () =>{
    Swal.fire({
        title:'¿Estas seguro que queres borrar todo el carrito?',
        showDenyButton:true,
        denyButtonText:'No',
        confirmButtonText:'Si'
    }).then((result)=>{
        if(result.isConfirmed){
            clear()
        }else if(result.isDenied){
        }
    })
}
  return (
    <div>
      <h1>Tu carrito de compras </h1>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          {cart.map((compra) =>(
            <CartItem key ={compra.id} compra={compra} />           
          ))}
        </div> 
        {/* aca se llama a la funcion  */}
        <span>Total a pagar: ${cartTotal()}</span>  
        <button className='btn btn-danger' onClick={preConfirmation}>Borrar todo el carrito</button>
        <Link className='btn btn-primary' to='/'>Seguir comprando</Link> 
        <Link to='/checkout'>Finalizar compra</Link> 
    </div>
  )
}
export default CartView


















 //este div key puede ser una card y puede estar en un componente aparte
            // <div key={compra.id} style={{display: 'flex', justifyContent: 'space-between', border: '1px solid black', margin: '10px', padding: '10px'}}>
            //   <img src={compra.img} alt={compra.name} style={{width: '10rem'}}/>
            //   <span>{compra.name}</span>
            //   <span>Cantidad: {compra.quantity}</span>
            //   <span>Precio: ${compra.price},00</span>
            //   <span>Precio final: ${compra.quantity * compra.price},00</span>
            //   <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button> 
            // </div>