import { LinkButton, SimpleButton } from "./Button";

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

      <div className="buttons-container">
        <div className="container-button">
          <SimpleButton
            onClick={() => addToCart()}
            disabled={count <= 0}
            text="Agregar"
          />
        </div>

        <div className="container-button">
          <LinkButton
            to={!count ? "" : `/cart`}
            disabled={count <= 0}
            text="Ver carrito"
          />
        </div>
      </div>
    </div>
  );
}
