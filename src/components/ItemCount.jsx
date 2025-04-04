import React, {useState, useEffect} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)
  const add =() => {
    if(count < stock){
        setCount(count + 1)
      }
  }
const substract =() => {
    if(count > 0){
          setCount(count - 1)
        }
    }

    //EJEMPLO DE USEEFFECT
    const comprar = () => {
      setCompra(!compra)
    }


    // se va a ejjecutar siempre, NO ES RECOMENDABLE USARLO
  // useEffect(() => {
  //   console.log('me ejecuto siempre')
  // })

  //se va a ejecutar cuando monta el componente, osea una sola vez se ejecuta y es la que mas se usa
  useEffect(() => {
    console.log('me ejecuto una sola vez')
  }, [])

  // esta a la escucha de un cambio en particular o cambios 
  useEffect(() => {
    console.log('me ejecuto una sola vez y cada vez q cambie compra')
  }, [compra])


  return (
    <div>
      <div>
      <button className='btn btn-danger' onClick={substract}>-</button>
      <span className='btn'>{count}</span>
      <button className='btn btn-success' onClick={add}>+</button>
      </div>
      <button className='btn btn-primary' onClick={comprar}>Agregar al carrito</button>
    </div>
  )
}
export default ItemCount



// rafce es para crear un componente funcional en react