import React from "react";
import Header from "../components/main/Header";
import "@styles/main/main.css";
import TabContainer from "../components/main/TabContainer";
import LoginForm from "../components/main/LoginForm";
import SignInForm from "../components/main/SignInForm";

function Main() {
  return (
    <div className="o-main">
      <div className="o-main-content">
        <Header />
        <div>
          <h1>
            <span>Bienvenido</span> a Omnishop
          </h1>
          <p>Ingresa o registrate en Omniapp</p>
        </div>
        <div className="o-main-forms">
          <TabContainer
            tabs={[
              {
                text: "Ingreso",
                content: <LoginForm />,
              },
              {
                text: "Registro",
                content: <SignInForm />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
