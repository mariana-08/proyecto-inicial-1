import { TiShoppingCart } from "react-icons/ti";
import {Badge} from 'react-bootstrap';
import React from 'react';
// import { CartContext } from "../context/CartContext"; // importamos el contexto del carrito  

const CartWidgetReactIcons = () => {
    return (
        <div>
            <TiShoppingCart color='red' fontSize={'2rem'} />
            <Badge pill bg="success" text="dark">15</Badge>
        </div>
    )
}
export default CartWidgetReactIcons