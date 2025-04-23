import React, {useContext} from 'react'
import ItenCount from './ItemCount'
// importamos el contexto del carrito
import {CartContext} from '../context/CartContext' 

const ItemDetail = ({productDetail}) => {
  //propuesta de la profe
  const [purchase, setPurchase] = useState(false) 
  // uso el contexto con useContext y le paso el contexto a usar 
  const {addToCart} = useContext(CartContext) // usamos el contexto del carrito
  
  const onAdd = (cantidad) => {
    addToCart(productDetail, cantidad) // llamo a la funcion addToCart y le paso el producto y la cantidad
    //propuesta de la profe:
    setPurchase(true) 
  }

  return (
    <div>
      <h2>Detalle de: {productDetail.name}</h2>
      <img className='' src={productDetail.img} alt={productDetail.name} />      
      <p> {productDetail.description}</p>
      <p>Precio: ${productDetail.price},00</p> 
      <p>Stock:{productDetail.stock} </p>
      <p></p>
      {/* propuesta profe: */}
     {purchase ?<Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItenCount stock={productDetail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail
