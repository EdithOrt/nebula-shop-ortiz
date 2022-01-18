import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CartContext from "../context/CartContext";
import UserModal from "./UserModal";

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
        <div className="cart">
          <p>No hay items aún</p>

          <Link to={"/"}>Comprar</Link>
        </div>
      ) : (
        <div className="cart">
          <div>
            {stateProducts.map((product) => (
              <div key={`${product.id}-{product.category}`}>
                <img src={product.pictureUrl} alt={product.title} />
                <p>{product.quantity}</p>
                <p>{product.title}</p>
                <p>{`$ ${product.totalProduct} MXN`}</p>

                <button onClick={() => removeItem(product.id)}>Borrar</button>
              </div>
            ))}
          </div>

          <div>
            <div>
              <p>Total:</p>
              <p>{`$ ${total} MXN`}</p>
            </div>

            <button onClick={() => clear()}>Vaciar carrito</button>

            <button
              onClick={() => {
                orderToSave();
                handleModal();
              }}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      )}

      {openModal && <UserModal />}
    </>
  );
}
