import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
  console.log('ItemListContainer')
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount/>
    </div>

  )
}



export default ItemListContainer;