import React from 'react'

const Item = ({producto}) => {
  return (
    <div className='card' style={{width:'18rem', marginTop:15}}>
        <img className='card-img-top' src={producto.img} alt={producto.name}/>
        <div className='card-body'>
            <h5 className='card-title'>{producto.name}</h5>
            <p className='card-text'>${producto.price},00</p>
            <p className='card-text'>{producto.description}</p>        
            <a href="#" className='btn btn-dark'>Ver más</a>
        </div>
    </div>
  )
}

export default Item

// recorda escribir rafce para armar el componente
