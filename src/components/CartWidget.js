import React from "react";

import shoppingCart from "../assets/icons/shopping_cart.svg";

export default function CartWidget() {
  return (
    <button className='cart-widget'>
      <img className='cart-widget__icon' src={shoppingCart} />
    </button>
  );
}
