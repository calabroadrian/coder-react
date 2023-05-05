import { useContext } from 'react';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';



const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
      <Link to='/cart' className='carrito' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
          <FaShoppingCart />
          {totalQuantity}
      </Link>
  )
}

export default CartWidget;
