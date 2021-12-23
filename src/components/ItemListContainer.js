import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productsPromise from "../mock/products";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { idCategory } = useParams();

  const [items, setItems] = useState(undefined);

  useEffect(() => {
    productsPromise.then(
      (response) => {
        if (!idCategory) {
          setItems(response);
        } else {
          const products = response.filter((item) => {
            return item.category === idCategory;
          });

          setItems(products);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [idCategory]);

  return <div>{items ? <ItemList items={items} /> : <p>Loading...</p>}</div>;
}
