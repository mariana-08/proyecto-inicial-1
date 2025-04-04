import ItemCount from "./ItemCount";
import { getProducts } from "../mock/AsyncService";
import { useEffect, useState} from "react";


const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState([])

  console.log('ItemListContainer')

  //promise (PROMESAS)
  // const getData = () => {
  //   let error = false
  //   // let error = true
  //   return new Promise ((resolve, reject) => {
  //     setTimeout(() => {
  //       if (error) {
  //         reject('No hay pizza')
  //       }else {
  //         resolve('Hay pizza, llega en 2 minutos')
  //       }        
  //     }, 2000)
  //   })
  // }
  //console.log(getData())

//console.log(getProducts(), 'sin el then')
  useEffect(() => {
    console.log('useEffect')
    getProducts()
    .then((res)=> setData(res))
    .catch((error) => console.log(error))
  },[])
  console.log(data)
  return (
    <div>
      <h1>{greeting}</h1>
      {/* <ItemCount stock={5}/> */}
      {/* <ItemCount stock={15}/> */}
      {/*se llama al array data para el metodo map  */}
      {data.map((producto) =><p>{producto.name}</p>)}
    </div>
  )
}
export default ItemListContainer;