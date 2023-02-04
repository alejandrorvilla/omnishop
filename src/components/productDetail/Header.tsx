import React from "react";
import "@styles/product/header.css";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/actions/login";

function Header() {
  const dispatch = useDispatch();
  return (
    <header className="o-header">
      <a
        className="o-link-header"
        onClick={() => {
          dispatch(Logout());
        }}
      >
        <img src={require("@images/Grupo 25.png")} />
      </a>
      <div className="o-icon-header">
        <img src={require("@images/Logo Omni.png")} alt="Logo Omni" />
      </div>
    </header>
  );
}

export default Header;
