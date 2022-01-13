import React, { useEffect, useState } from "react";

import productsPromise from "../mock/products";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const { idItem } = useParams();

  const [item, setItem] = useState(undefined);

  useEffect(() => {
    const db = getFirestore();

    if (idItem) {
      const productRef = doc(db, "itemCollection", idItem);
      getDoc(productRef).then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        }
      });
    }
  }, [idItem]);

  console.log(item);
  console.log(idItem);

  if (!item) {
    return <p>Loading</p>;
  }
  return <ItemDetail item={item} />;
}
