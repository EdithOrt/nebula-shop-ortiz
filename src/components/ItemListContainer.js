import { useState, useEffect } from "react";

import productsPromise from "../mock/products";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
  const [stock, setStock] = useState(10);
  const initValue = 1;

  const onAdd = (count, setCount) => {
    console.log(`Has agregado ${count} piezas`);
    let result = stock - count;
    setStock(result);
    setCount(0);
  };

  console.log(`Quedan ${stock} piezas en el stock`);

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

      <ItemCount stock={stock} initValue={initValue} onAdd={onAdd} />
    </div>
  );
}
