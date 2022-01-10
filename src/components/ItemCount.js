import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCount({ stock, count, onAdd, addToCart }) {
  return (
    <div className="item-count-container">
      <div className="item-count">
        <button
          className="item-count__button"
          onClick={() => onAdd("onRemove")}
          disabled={!count}
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

      <button
        onClick={() => addToCart()}
        disabled={count <= 0}
        className="button-on-add"
      >
        Agregar
      </button>

      <Link
        className="button-buy"
        to={!count ? "" : `/cart`}
        disabled={count <= 0}
      >
        Terminar compra
      </Link>
    </div>
  );
}
