import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = () => {
  
  return (
    <div className="cart-widget">
        <FaShoppingCart />
      <span className="cart-notification">3</span>
    </div>
  );
};

export default CartWidget;
