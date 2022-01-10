import { useContext, useState, useEffect } from "react";

import shoppingCart from "../assets/icons/shopping_cart.svg";

import CartContext from "../context/CartContext";

export default function CartWidget() {
  const { totalOfProducts } = useContext(CartContext);

  const [stateTotalItems, setStateTotalItems] = useState(0);

  useEffect(() => {
    setStateTotalItems(totalOfProducts);
    return () => {
      setStateTotalItems(0);
    };
  }, [totalOfProducts]);

  return (
    <>
      {stateTotalItems ? (
        <button className="cart-widget">
          <img className="cart-widget__icon" src={shoppingCart} />

          <p className="cart-widget__number">{stateTotalItems}</p>
        </button>
      ) : null}
    </>
  );
}
