import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@images/Logo Omni Negro@2x.png";
import "@styles/success/loginCompleted.css";

function LoginCompleted() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/shop/${1}`);
    }, 2000);
  }, []);

  return (
    <section className="o-success-login">
      <div className="o-content">
        <img src={logo} alt="Logo Omni" />
        <h1>Ingresando</h1>
      </div>
    </section>
  );
}

export default LoginCompleted;
