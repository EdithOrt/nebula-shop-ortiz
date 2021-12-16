import React from "react";

import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          pictureUrl={item.pictureUrl}
          key={item.id}
        />
      ))}
    </div>
  );
}
