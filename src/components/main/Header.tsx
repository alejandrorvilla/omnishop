import React from "react";
import logo from "@images/Logo Omni Negro@2x.png";
import grupo from "@images/Grupo 182660@2x.png";
import "@styles/main/header.css";

function Header() {
    
    return (
        <header className="o-main-header">
            <img className="o-img-logo" src={logo} alt="Logo Omni" />
            <img className="o-img-group" src={grupo} alt="Grupo 182660" />
        </header>
    )
}

export default Header;