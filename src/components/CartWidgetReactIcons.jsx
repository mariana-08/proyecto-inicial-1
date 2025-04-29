import { TiShoppingCart } from "react-icons/ti";
import {Badge} from 'react-bootstrap';
import React from 'react';
import { useContext } from "react"; // importamos el hook useContext de react
import { CartContext } from "../context/CartContext"; // importamos el contexto del carrito  

const CartWidgetReactIcons = () => {
    const {cart} = useContext(CartContext); 
    // console.log(cart); 
    return (
        <div>
            <TiShoppingCart color='red' fontSize={'2rem'} />
            <Badge pill bg="success" text="dark">
                {/* {cart.length} */}
                {/* deberia incorporar el totalProducts para que me calcule el total de productos */}
                 {/* {cart.reduce((acc, prod) => totalProducts=() acc + prod.quantity, 0)} 
                {cart.length > 0 ? cart.reduce((acc, prod) => acc + prod.quantity, 0) : 0}   */}
                    
            </Badge>
        </div>
    )
}
export default CartWidgetReactIcons