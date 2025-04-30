//import {getProducts, products} from '../mock/AsyncService'
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { addDoc, collection, getDocs, query, where, } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const{categoryId} = useParams()
  console.log(categoryId) 

  //FIREBASE
  useEffect (() => {
    setLoader(true)
    //conectamos con nuestra collection de firebase
    const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) :collection(db, "productos")
    //pedir los documentos
    getDocs(productsCollection)
    .then((res) => {
      //limpiamos los datos para poder utilizar
      const list = res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setData(list)
    })
    .catch((error) => console.log(error))
    .finally(() => setLoader(false))  
  }, [categoryId])


  //PROMESA 
  // useEffect(() => {
  //   setLoader(true)
  //   getProducts()
  //   .then((res)=>{
  //   if (categoryId) {
  //     //filtro
  //     setData(res.filter((prod) => prod.category === categoryId))
  //   } else {
  //     setData(res)
  //     }
  //   } )
  //   .catch((error) => console.log(error))
  //   .finally(() => setLoader(false))
  // },[categoryId])

  //Esta parte es para subir los productos de manera dimanico:
  // agarro el mock, saco el id:, segundo saco el 1er producto porq ya lo hice

  //SOLO SE HACE UNA VEZ
  // const subirData = () => {
  //   console.log('Subiendo data...')
  //   const collectionToAdd = collection(db, "productos")
  //   products.map((item)=> addDoc(collectionToAdd, item))
  // }

  return (
    <div>
      {/* <button onClick={subirData}>SUBIR UNA SOLA VEZ</button> */}
      { 
        loader ? <LoaderComponent/> 
        :<div>
          <h1>{greeting} {categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
        <ItemList data ={data}/>
        </div>
      }
    </div>
    )
}
export default ItemListContainer;