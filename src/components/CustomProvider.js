import { useState, useEffect } from "react";

import CartContext from "../context/CartContext";

export default function CustomProvider({ children }) {
  const [products, setProducts] = useState([]);

  const [total, setTotal] = useState(0);

  const [totalOfProducts, setTotalOfProducts] = useState(0);

  const isInCart = (itemId) => {
    let validation = false;
    if (products.length) {
      products.map((product) => {
        if (product.id === itemId) {
          validation = true;
        }
      });
    }
    return validation;
  };

  const getTotal = (arrayOfProducts) => {
    if (arrayOfProducts.length > 1) {
      let totalPrice = arrayOfProducts.reduce((acc, obj) => {
        return acc + obj.totalProduct;
      }, 0);

      let totalQuantityProducts = arrayOfProducts.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0);

      setTotal(totalPrice);
      setTotalOfProducts(totalQuantityProducts);
    } else if (arrayOfProducts.length === 1) {
      setTotal(arrayOfProducts[0].totalProduct);
      setTotalOfProducts(arrayOfProducts[0].quantity);
    }
  };

  const addItem = (item) => {
    if (isInCart(item.id)) {
      products.map((product) => {
        if (product.id === item.id) {
          product.quantity = product.quantity + item.quantity;

          product.totalProduct =
            product.totalProduct + item.price * item.quantity;
        }
      });
    } else {
      products.push(item);
    }

    getTotal(products);
  };

  const removeItem = (itemId) => {
    let newArray = [];
    if (products.length > 1) {
      products.map((product) => {
        if (product.id !== itemId) {
          newArray.push(product);
        }
      });

      setProducts(newArray);
    } else {
      setProducts(newArray);
    }
  };

  const clear = () => {
    setProducts([]);
    setTotal(0);
    setTotalOfProducts(0);
  };

  useEffect(() => {
    getTotal(products);
    return () => {
      setTotalOfProducts(0);
      setTotal(0);
    };
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        products: products,
        total,
        totalOfProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
