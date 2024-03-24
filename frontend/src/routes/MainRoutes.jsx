import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Auth from "../pages/Auth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
