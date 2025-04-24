import React, {useContext} from 'react'
import ItenCount from './ItemCount'
//se importa el contexto
import { CartContext } from '../context/CartContext'

const ItemDetail = ({productDetail}) => {
  //uso el contexto con useContext y le paso el contexto a usar 
  const {addToCart} = useContext(CartContext) //destructurando el contexto del carrito
  
  const onAdd = (cantidad) => {
    addToCart(productDetail, cantidad) //agregar el item al carrito y la cantidad   
  }

  return (
    <div>
      <h2>Detalle de: {productDetail.name}</h2>
      <img src={productDetail.img} alt={productDetail.name} />      
      <p> {productDetail.description}</p>
      <p>Precio: ${productDetail.price},00</p> 
      <p>Stock:{productDetail.stock} </p>
      <p></p>
     <ItenCount stock={productDetail.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail
