import { TiShoppingCart } from "react-icons/ti";
import {Badge} from 'react-bootstrap';
import React from 'react';
import { useContext } from "react"; // importamos el hook useContext de react
import { CartContext } from "../context/CartContext"; // importamos el contexto del carrito  

const CartWidgetReactIcons = () => {
    const {cartQuantity, cart} = useContext(CartContext); 
    
    return (
        <div>
            <TiShoppingCart color='red' fontSize={'2rem'} />
            {cart.length > 0  && 
                <Badge pill bg="success" text="dark">
                {cartQuantity()}                    
          </Badge>}
        </div>
    )
}
export default CartWidgetReactIcons