import React, { useState } from "react";

import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const [stock, setStock] = useState(10);
  const initValue = 1;

  const [count, setCount] = useState(initValue);

  const onAdd = (typeOfOperation) => {
    if (typeOfOperation === "onAdd") {
      count < stock && setCount(count + 1);
    } else if (typeOfOperation === "onRemove") {
      count > 0 && setCount(count - 1);
    }
  };
  return (
    <div className="item-detail" id={item.id}>
      <div className="item-detail__img">
        <img src={item.pictureUrl} alt="imagen de producto" />
      </div>

      <div className="item-detail__text">
        <p className="item-detail__text__name">{item.name}</p>
        <p className="item-detail__text__price">{`$ ${item.price}`}</p>
        <p className="item-detail__text__description">{item.description}</p>

        <ItemCount stock={stock} count={count} onAdd={onAdd} />
      </div>
    </div>
  );
}
