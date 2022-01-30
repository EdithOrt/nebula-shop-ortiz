import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState, useContext } from "react";
import moment from "moment";

import CartContext from "../context/CartContext";
import { LinkButton } from "./Button";

export default function UserModal() {
  const { total, order, clear } = useContext(CartContext);

  const [orderId, setOrderId] = useState();

  const [emailError, setEmailError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = Date.now();

    const formatDate = moment(date).format("L");

    const email = e.target[1].value;
    const confirmEmail = e.target[2].value;

    if (email !== confirmEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);

      const orderData = {
        buyer: {
          name: e.target[0].value,
          phone: e.target[3].value,
          email: e.target[1].value,
        },
        items: order,
        total: total,
        date: formatDate,
        state: "generada",
      };

      const db = getFirestore();

      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, orderData).then(({ id }) => setOrderId(id));

      clear();
    }
  };
  return (
    <div className="user-modal">
      {!orderId ? (
        <div className="user-modal__container">
          <div className="user-modal__title">
            <h2>Registro de datos para compra</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputs-container">
              <div className="inputs-container__item">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="inputs-container__item">
                <label htmlFor="email">Correo</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  required
                  className={emailError ? "error-input" : ""}
                />

                {emailError && (
                  <span className="error">No coinciden los campos</span>
                )}
              </div>

              <div className="inputs-container__item">
                <label htmlFor="email-confirmation">
                  Confirmar correo eléctronico
                </label>
                <input
                  type="email"
                  name="email-confirmation"
                  placeholder="jane@example.com"
                  required
                  className={emailError ? "error-input" : ""}
                />

                {emailError && (
                  <span className="error">No coinciden los campos</span>
                )}
              </div>

              <div className="inputs-container__item">
                <label htmlFor="telephone">Teléfono</label>
                <input
                  type="tel"
                  name="telephone"
                  placeholder="5512345678"
                  required
                />
              </div>
            </div>

            <div className="submit-container">
              <input type="submit" name="sendForm" value="Enviar" />
            </div>
          </form>
        </div>
      ) : (
        <div className="user-modal__container successful">
          <h2 className="alert">¡Tu compra se ha realizado exitosamente!</h2>

          <p className="info">{`ID de compra: ${orderId}`}</p>

          <div className="container-button">
            <LinkButton to="/" text="Volver al incio" />
          </div>
        </div>
      )}
    </div>
  );
}
