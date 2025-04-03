import { TiShoppingCart } from "react-icons/ti";
import {Badge} from 'react-bootstrap';

const CartWidgetReactIcons = () => {
    return (
        <div>
            <TiShoppingCart color='red' fontSize={'2rem'} />
            <Badge pill bg="success" text="dark">15</Badge>
        </div>
    )
}
export default CartWidgetReactIcons