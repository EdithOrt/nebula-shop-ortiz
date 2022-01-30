import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer() {
  const { idCategory } = useParams();

  const [items, setItems] = useState(undefined);

  useEffect(() => {
    const db = getFirestore();

    if (!idCategory) {
      const itemsCollection = collection(db, "itemCollection");
      getDocs(itemsCollection).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No result");
        }

        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      const queryCategory = query(
        collection(db, "itemCollection"),
        where("category", "==", idCategory)
      );
      getDocs(queryCategory).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No result");
        }

        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, [idCategory]);

  return <div>{items ? <ItemList items={items} /> : <p>Loading...</p>}</div>;
}
