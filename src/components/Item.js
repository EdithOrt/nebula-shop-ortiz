import React from "react";

import { NavLink } from "react-router-dom";

export default function Item({ id, title, description, price, pictureUrl }) {
  return (
    <div id={id} className="product-resume-container">
      <p>{title}</p>
      <img src={pictureUrl} alt="imagen de producto" />
      <p>{description}</p>
      <p>{price}</p>
      <NavLink to={`/item/${id}`}>Comprar</NavLink>
    </div>
  );
}
