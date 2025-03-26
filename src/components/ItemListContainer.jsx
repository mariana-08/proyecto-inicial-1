const ItemListContainer = ({nombre,apellido}) => { //se ingresa dentro de los ()props y afuera se declara la const {nombre, apellido} =props 
    //const {nombre, apellido} =props

  return (
    <div>
        <h1>¡Bienvenidos a la tienda! 🍷</h1> 
        <p>{nombre}</p> 
        <p>{apellido}</p>    
    </div>
  );
}

export default ItemListContainer;