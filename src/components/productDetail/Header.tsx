import React from "react";
import "@styles/product/header.css";

function Header() {
  return (
    <header className="o-header">
      <a className="o-link-header">
        <img src={require("@images/Grupo 25.png")} />
      </a>
      <div className="o-icon-header">
        <img src={require("@images/Logo Omni.png")} alt="Logo Omni" />
      </div>
    </header>
  );
}

export default Header;
