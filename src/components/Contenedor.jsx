import  {useContext} from 'react';
import {CartContext} from '../context/CartContext';

const productos = [
   {id: 1, nombre: "Laptop", precio: 999, imagen:"/src/assets/laptop.jpg"},
    {id: 2, nombre: "Telefono", precio: 25, imagen:"/src/assets/phone.jpg"},
    {id: 3, nombre: "Auriculares", precio: 50, imagen:"/src/assets/auriculares.jpg"},
  
];

const Contenedor = ({mensajeBienvenida, }) => {
  const {addToCart} = useContext(CartContext);
  return (
    <div className="contenedor">
      <h1>{mensajeBienvenida}</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} width="150" />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button onClick={addToCart}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contenedor;
