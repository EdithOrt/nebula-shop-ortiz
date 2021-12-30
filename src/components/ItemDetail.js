import React, { useState, useContext } from "react";

import ItemCount from "./ItemCount";

import CartContext from "../context/CartContext";

export default function ItemDetail({ item }) {
  const { addItem, clear, isInCart, removeItem, products } =
    useContext(CartContext);

  // const [stock, setStock] = useState(10);
  const initValue = 1;

  const [count, setCount] = useState(initValue);

  const onAdd = (typeOfOperation) => {
    if (typeOfOperation === "onAdd") {
      count < item.stock && setCount(count + 1);
    } else if (typeOfOperation === "onRemove") {
      count > 0 && setCount(count - 1);
    }
  };

  const addToCart = () => {
    console.log("click a comprar producto");
    addItem({ ...item, quantity: count });
    setCount(initValue);
    console.log(products);
  };
  // console.log(item);
  return (
    <div className="item-detail" id={item.id}>
      <div className="item-detail__img">
        <img src={item.pictureUrl} alt="imagen de producto" />
      </div>

      <div className="item-detail__text">
        <p className="item-detail__text__name">{item.name}</p>
        <p className="item-detail__text__price">{`$ ${item.price}`}</p>
        <p className="item-detail__text__description">{item.description}</p>

        <ItemCount
          stock={item.stock}
          count={count}
          onAdd={onAdd}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}
