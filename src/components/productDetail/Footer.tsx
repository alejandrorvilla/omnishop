import React from "react";
import "@styles/product/footer.css";

function Footer() {
  return (
    <footer className="o-footer">
      <div>
        <span>Newsletter</span>
      </div>
      <div>
        <span>Todos los derechos reservados</span>
        <span>2023</span>
        <span>Omnishop</span>
        <img src={require("@images/Logo Omni.png")} alt="Logo Omni" />
      </div>
    </footer>
  );
}

export default Footer;
