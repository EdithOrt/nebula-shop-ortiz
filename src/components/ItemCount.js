import { useState } from "react";

export default function ItemCount({ stock, initValue, onAdd }) {
  const [count, setCount] = useState(initValue);

  const handleCount = (typeOfOperation) => {
    if (typeOfOperation === "onAdd") {
      count < stock && setCount(count + 1);
    } else if (typeOfOperation === "onRemove") {
      count > 0 && setCount(count - 1);
    }
  };
  return (
    <div className="item-count-container">
      <div className="item-count">
        <button
          className="item-count__button"
          onClick={() => handleCount("onRemove")}
          disabled={count <= 0}
        >
          -
        </button>

        <div className="item-count__container-quantity">
          <p>{count}</p>
        </div>

        <button
          className="item-count__button"
          onClick={() => handleCount("onAdd")}
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(count, setCount)}
        className="button-on-add"
        disabled={count <= 0 || count > stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
