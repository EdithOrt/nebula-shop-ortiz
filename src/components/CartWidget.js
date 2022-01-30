import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <Link className="cart-widget" to="/cart">
          <img
            className="cart-widget__icon"
            src={shoppingCart}
            alt="Carrito de compra"
          />

          <p className="cart-widget__number">{stateTotalItems}</p>
        </Link>
      ) : null}
    </>
  );
}
