import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoginCompleted from "../pages/LoginCompleted";
import Main from "../pages/Main";
import ProductDetail from "../pages/ProductDetail";
import SigninCompleted from "../pages/SigninCompleted";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SigninCompleted />} />
        <Route path="/login" element={<LoginCompleted />} />
        <Route path="/shop/:productId" element={<ProductDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
