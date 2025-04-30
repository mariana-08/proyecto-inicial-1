import { TiShoppingCart } from "react-icons/ti";
import {Badge} from 'react-bootstrap';
import React from 'react';
import { useContext } from "react"; // importamos el hook useContext de react
import { CartContext } from "../context/CartContext"; // importamos el contexto del carrito  

const CartWidgetReactIcons = () => {
    const {carQuantity} = useContext(CartContext); 
    // console.log(cart); 
    return (
        <div>
            <TiShoppingCart color='red' fontSize={'2rem'} />
            <Badge pill bg="success" text="dark">
              {carQuantity()}
                    
            </Badge>
        </div>
    )
}
export default CartWidgetReactIcons