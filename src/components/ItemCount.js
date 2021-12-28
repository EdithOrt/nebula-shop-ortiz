import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCount({ stock, count, onAdd }) {
  return (
    <div className="item-count-container">
      <div className="item-count">
        <button
          className="item-count__button"
          onClick={() => onAdd("onRemove")}
          disabled={count <= 0}
        >
          -
        </button>

        <div className="item-count__container-quantity">
          <p>{count}</p>
        </div>

        <button
          className="item-count__button"
          onClick={() => onAdd("onAdd")}
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      <Link className="button-on-add" to="/cart">
        Agregar al carrito
      </Link>
    </div>
  );
}
