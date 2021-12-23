import React, { useEffect, useState } from "react";

import productsPromise from "../mock/products";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const { idItem } = useParams();

  const [item, setItem] = useState(undefined);

  useEffect(() => {
    if (idItem) {
      productsPromise.then(
        (response) => {
          response.map((product) => {
            if (product.id === Number(idItem)) {
              return setItem(product);
            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [idItem]);

  if (!item) {
    return <p>Loading</p>;
  }
  return <ItemDetail item={item} />;
}
