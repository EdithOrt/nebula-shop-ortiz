import React, { useState } from "react";

import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const [stock, setStock] = useState(10);
  const initValue = 1;

  const onAdd = (count, setCount) => {
    console.log(`Has agregado ${count} piezas`);
    let result = stock - count;
    setStock(result);
    setCount(0);
  };

  console.log(`Quedan ${stock} piezas en el stock`);
  return (
    <div className="item-detail" id={item.id}>
      <img
        className="item-detail__img"
        src={item.pictureUrl}
        alt="imagen de producto"
      />

      <div className="item-detail__text">
        <p className="item-detail__text__name">{item.name}</p>
        <p className="item-detail__text__price">{`$ ${item.price}`}</p>
        <p className="item-detail__text__description">{item.description}</p>

        <ItemCount stock={stock} initValue={initValue} onAdd={onAdd} />
      </div>
    </div>
  );
}
