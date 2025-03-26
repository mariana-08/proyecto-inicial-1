import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';

const CartWidget = () => {
  const { cartIntems} = useContext(CartContext);
 
  return (
    <Link to="/cart" className="cart-widget">
      🛒
      {cartIntems > 0 && <span className="cart-count">{cartIntems}</span>}
    </Link>
  );
};

export default CartWidget;