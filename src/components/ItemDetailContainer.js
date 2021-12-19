import React, { useEffect, useState } from "react";
import getItem from "../mock/getItem";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    getItem.then(
      (response) => {
        setItem(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  if (!item) {
    return <p>Loading</p>;
  }
  return (
    <>
      <ItemDetail item={item} />
    </>
  );
}
