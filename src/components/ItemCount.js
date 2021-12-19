import { useState } from "react";

export default function ItemCount({ stock, initValue, onAdd }) {
  const [count, setCount] = useState(initValue);

  const handleCount = (typeOfOperation) => {
    if (typeOfOperation === "onAdd") {
      count < stock && setCount(count + 1);
    } else if (typeOfOperation === "onRemove") {
      count > 1 && setCount(count - 1);
    }
  };
  return (
    <div className="item-count-container">
      <div className="item-count">
        <button
          className="item-count__button"
          onClick={() => handleCount("onRemove")}
          disabled={count <= 1}
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

      <button onClick={() => onAdd(count)} className="button-on-add">
        Agregar al carrito
      </button>
    </div>
  );
}
