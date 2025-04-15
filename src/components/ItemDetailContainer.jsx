import React, { useEffect, useState} from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})

  const {itemId} =useParams()
  console.log(itemId)

  useEffect(() => {
    getOneProduct(itemId)
    .then((res) => setProductDetail(res))
    .catch((error) => console.log(error))
  },[ itemId ])
  
  // console.log(productDetail)

  return (
    <div>
      <ItemDetail productDetail={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer 