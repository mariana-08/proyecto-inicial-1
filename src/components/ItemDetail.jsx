import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
// se importa el contexto
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({productDetail}) => {
  //propuesta de la profe: 
  const [compro, setCompro] = useState(false) 

  //uso el contexto con useContext y le paso el contexto a usar 
  const {addToCart} = useContext(CartContext) 
  
  const onAdd = (cantidad) => {
    addToCart(productDetail, cantidad) //agregar el item al carrito y la cantidad  
    //siguiendo la propuesta de la profe:
    setCompro(true) //cambiar el estado de compro a true 
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
    </div>
  )
}

export default ItemDetail
