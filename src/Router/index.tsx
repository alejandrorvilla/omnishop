import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;