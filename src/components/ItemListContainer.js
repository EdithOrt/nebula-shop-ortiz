import { useState, useEffect } from "react";

import productsPromise from "../mock/products";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
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
    </div>
  );
}
