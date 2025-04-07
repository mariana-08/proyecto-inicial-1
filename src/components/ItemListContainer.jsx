// import ItemCount from "./ItemCount";
import { getProducts} from "../mock/AsyncService";
import { useEffect, useState} from "react";
import ItemList from "./ItemList";

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
      {/* {data.map((producto) =><p key={producto.id}>{producto.name}</p>)}     */}
      {/* esto que esta abajo es para la actividad de la preentrega 2, lo de arriba es lo que se vio  en 
      clases con data.map y key  */}
      {/* ejemplo para preentrega2 abajo */}
      <ItemList data ={data}/>
    </div>
  )
}
export default ItemListContainer;