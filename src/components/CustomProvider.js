import React from "react";

import CartContext from "../context/CartContext";

export default function CustomProvider({ children }) {
  let products = [];

  let stock = true;

  const isInCart = (itemId) => {
    let validation = false;
    if (products.length) {
      products.map((product) => {
        if (product.id === itemId) {
          validation = true;
        }
      });
    }
    return validation;
  };

  const addItem = (item) => {
    if (isInCart(item.id)) {
      products.map((product) => {
        if (product.id === item.id) {
          product.quantity = product.quantity + item.quantity;
        }
      });
    } else {
      products.push(item);
    }
  };

  const removeItem = (itemId) => {
    console.log(itemId);
  };

  const clear = () => {
    console.log("clear function");
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, isInCart, products: products }}
    >
      {children}
    </CartContext.Provider>
  );
}
