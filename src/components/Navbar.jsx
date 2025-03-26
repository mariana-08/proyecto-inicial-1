import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/src/assets/logo.svg" alt="Logo" width="50" />
      </Link>
      
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/electronics">Electrónicos</Link></li>
        <li><Link to="/categoria/jewelery">Joyas</Link></li>
        <li><Link to="/categoria/men's clothing">Ropa Masculina</Link></li>
      </ul>
      
      <CartWidget />
    </nav>
  );
};

export default Navbar;