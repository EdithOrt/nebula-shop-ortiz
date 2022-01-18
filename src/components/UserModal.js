import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import CartContext from "../context/CartContext";

export default function UserModal() {
  const { total, order, clear } = useContext(CartContext);

  const [orderId, setOrderId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = Date.now();

    const formatDate = moment(date).format("L");

    const orderData = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[2].value,
        email: e.target[1].value,
      },
      items: order,
      total: total,
      date: formatDate,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, orderData).then(({ id }) => setOrderId(id));

    clear();
  };
  return (
    <div className="user-modal">
      {!orderId ? (
        <div className="user-modal__container">
          <h2 className="user-modal__title">Registro de datos para compra</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" placeholder="Jane Doe" />

            <label htmlFor="email">Correo</label>
            <input type="email" name="email" placeholder="jane@example.com" />

            <label htmlFor="telephone">Teléfono</label>
            <input type="tel" name="telephone" placeholder="5512345678" />

            <input type="submit" name="sendForm" value="Enviar" />
          </form>
        </div>
      ) : (
        <div className="user-modal__container">
          <h2>¡Tu compra se ha realizado exitosamente!</h2>

          <p>{`ID de compra: ${orderId}`}</p>

          <Link to="/">Volver al incio</Link>
        </div>
      )}
    </div>
  );
}
