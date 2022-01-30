import React from "react";

import { NavLinkButton } from "./Button";

export default function Item({ id, title, price, pictureUrl }) {
  return (
    <div id={id} className="product-resume">
      <img
        className="product-resume__img"
        src={pictureUrl}
        alt="imagen de producto"
      />

      <div className="product-resume__info">
        <div className="container-text">
          <p className="title">{title}</p>
          <p className="price">{`$${price}`}</p>
        </div>
        <NavLinkButton to={`/item/${id}`} text="Comprar" />
      </div>
    </div>
  );
}
