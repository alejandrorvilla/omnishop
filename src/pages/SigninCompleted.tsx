import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@images/Logo Omni Negro@2x.png";
import "@styles/success/signinCompleted.css";

function SigninCompleted() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <section className="o-success-signin">
      <div className="o-content">
        <img src={logo} alt="Logo Omni" />
        <h1>Registro Completo</h1>
      </div>
    </section>
  );
}

export default SigninCompleted;
