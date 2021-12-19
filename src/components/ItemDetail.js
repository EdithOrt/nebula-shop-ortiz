import React from "react";

export default function ItemDetail({ item }) {
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
      </div>
    </div>
  );
}
