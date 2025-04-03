// ejemplo de props en un componente funcional
// const ItemListContainer = ({nombre, apellido}) => {
//  // console.log(props);
//   // const {nombre, apellido}= props

//   return (
//     <div>
//       {/* <p>{nombre}</p>
//       <p>{apellido}</p> */}
//     </div>    
//   );
// }

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h1>{greeting}</h1>
    </div>

  )
}



export default ItemListContainer;