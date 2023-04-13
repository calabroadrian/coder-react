import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
    return (
      <nav className="navbar">
        <Link to='/'>
          <h3>Ecommerce</h3>
          </Link>
        <div className="container">
          <NavLink to={`/category/celular`}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
          <NavLink to={`/category/tablet`}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
          <NavLink to={`/category/notebook`}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
          <CartWidget />
        </div>
      </nav>
    );
  };

  export default NavBar;