import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  const stock = 10;
  const initValue = 1;

  const onAdd = (count) => {
    console.log(`Has agregado ${count} piezas`);
  };
  return (
    <div>
      <p>{greeting}</p>

      <ItemCount stock={stock} initValue={initValue} onAdd={onAdd} />
    </div>
  );
}
