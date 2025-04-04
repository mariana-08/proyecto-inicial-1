import React, {useState} from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(1)

    const add =() => {
        setCount(count + 1)
    }
    const substract =() => {
        setCount(count - 1)
    }
    console.log('Hola soy el contador')


  return (
    <div>
      <button onClick={substract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </div>
  )
}

export default ItemCount



// rafce es para crear un componente funcional en react