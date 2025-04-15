import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='card' style={{width:'18rem', marginTop:15}}>
        <img className='card-img-top' src={producto.img} alt={producto.name}/>
        <div className='card-body'>
            <h5 className='card-title'>{producto.name}</h5>
            <p className='card-text'>${producto.price},00</p>
            <p className='card-text'>{producto.description}</p>        
            <Link href="#" className='btn btn-dark'to={`/item/${producto.id}`} >Ver más</Link>
            {/* <Link href="#" className='btn btn-dark'to={'/item/'+producto.id} >Ver más</Link> */}
            {/* esta es otra forma de hacerlo pero es recomendable hacer la primera */}
        </div>
    </div>
  )
}

export default Item

// recorda escribir rafce para armar el componente
