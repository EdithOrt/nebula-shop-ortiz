import React, { useState } from "react";
import ItemCount from "./ItemCount";

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
  return (
    <div>
      <p>{greeting}</p>

      <ItemCount stock={stock} initValue={initValue} onAdd={onAdd} />
    </div>
  );
}
