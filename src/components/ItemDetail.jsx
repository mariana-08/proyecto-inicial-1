import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
// se importa el contexto
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({productDetail}) => {   
  const [compro, setCompro] = useState(false) 
  const {addToCart} = useContext(CartContext) 
  
  const onAdd = (cantidad) => {
    addToCart(productDetail, cantidad) 
    setCompro(true) 
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:`Agregaste:   ${productDetail.name} al carrito`,
      showCancelButton:false,
      showConfirmButton:false,
      timer:1000
    })   
  }

  return (
    <div>
      <h2>Detalle de: {productDetail.name}</h2>
      <img src={productDetail.img} alt={productDetail.name} />      
      <p> {productDetail.description}</p>
      <p>Precio: ${productDetail.price},00</p> 
      <p>Stock:{productDetail.stock} </p>
      <p></p>
      {/* <ItemCount stock={productDetail.stock} onAdd={onAdd} />  */}
           {/* siguiendo el ejemplo de la profe: */}
      {compro ? <Link className='btn btn-success' to='/cart'>Ir al carrito</Link> : <ItemCount stock={productDetail.stock} onAdd={onAdd} /> 
      }
           {/* esto sirve para cuando aprieto comprar aparezca el boton que dice ir al carrito para luego ver la cart  */}
      <Link className='btn btn-primary' to='/'>Seguir comprando</Link>
    </div>
  )
}

export default ItemDetail
