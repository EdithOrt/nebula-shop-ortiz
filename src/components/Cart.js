import { useContext, useState, useEffect } from "react";

import CartContext from "../context/CartContext";
import { LinkButton, SimpleButton } from "./Button";
import UserModal from "./UserModal";

import cartIcon from "../../src/assets/icons/empty-cart.svg";

export default function Cart() {
  const { clear, removeItem, products, total, orderToSave } =
    useContext(CartContext);

  const [stateProducts, setStateProducts] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    setStateProducts(products);
    return () => {
      setStateProducts([]);
    };
  }, [products]);
  return (
    <>
      {!stateProducts || !stateProducts.length ? (
        <div className="cart empty">
          <img src={cartIcon} className="empty-icon" alt="Carrito de compra" />
          <p className="empty-message">Carrito vacío :(</p>

          <div className="button-buy-container">
            <LinkButton to={"/"} text="Comprar" />
          </div>
        </div>
      ) : (
        <div className="cart">
          <div className="cart__title">
            <h3 className="cart__title__text">Carrito de compras</h3>
          </div>

          <div className="cart__detail">
            <hr className="line" />
            {stateProducts.map((product) => (
              <>
                <div
                  key={`${product.id}-{product.category}`}
                  className="cart__detail__item"
                >
                  <img
                    className="cart__detail__item__img"
                    src={product.pictureUrl}
                    alt={product.title}
                  />

                  <div className="text-container">
                    <p className="text-container__quantity">
                      {product.quantity}
                    </p>
                    <p className="text-container__title">{product.title}</p>
                    <p className="text-container__price">{`$ ${product.totalProduct} MXN`}</p>

                    <div className="text-container__button">
                      <SimpleButton
                        onClick={() => removeItem(product.id)}
                        text="Borrar"
                      />
                    </div>
                  </div>
                </div>

                <hr className="line" />
              </>
            ))}
          </div>

          <div className="cart__total">
            <div className="cart__total__info">
              <p className="cart__total__info__text">Total:</p>
              <p className="cart__total__info__quantity">{`$ ${total} MXN`}</p>
            </div>

            <div className="container-buttons">
              <div className="button">
                <SimpleButton onClick={() => clear()} text="Vaciar carrito" />
              </div>

              <div className="button">
                <SimpleButton
                  onClick={() => {
                    orderToSave();
                    handleModal();
                  }}
                  text="Finalizar compra"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {openModal && <UserModal />}
    </>
  );
}
