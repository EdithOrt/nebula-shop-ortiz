import React from "react";

import "./styles/index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CustomProvider from "./components/CustomProvider";
import Cart from "./components/Cart";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:idCategory"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
