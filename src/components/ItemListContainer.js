import { useState, useEffect } from "react";

import productsPromise from "../mock/products";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
  /* const stock = 20

    const [count, setCount] = useState({initialValue: 1, stock: stock}) */

  const [items, setItems] = useState(undefined);

  useEffect(() => {
    productsPromise.then(
      (response) => {
        setItems(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div>
      <p>{greeting}</p>
      {items ? <ItemList items={items} /> : <p>Loading...</p>}
      {/* <ItemCount count={count} setCount={setCount} /> */}
    </div>
  );
}
