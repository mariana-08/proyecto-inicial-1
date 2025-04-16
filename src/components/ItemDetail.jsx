import React from 'react'
import ItenCount from './ItemCount'

const ItemDetail = ({productDetail}) => {

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} productos al carrito`)
  }

  return (
    <div>
      <h2>Detalle de: {productDetail.name}</h2>
      <img className='' src={productDetail.img} alt={productDetail.name} />      
      <p> {productDetail.description}</p>
      <p>Precio: ${productDetail.price},00</p> 
      <p>Stock:{productDetail.stock} </p>
      <p></p>
      <ItenCount stock={productDetail.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail
