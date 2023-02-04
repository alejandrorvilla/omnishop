import React, { useEffect } from "react";
import Header from "../components/main/Header";
import "@styles/main/main.css";
import TabContainer from "../components/main/TabContainer";
import LoginForm from "../components/main/LoginForm";
import SignInForm from "../components/main/SignInForm";
import { IReducer } from "../redux/store";
import Mask from "../components/base/Mask";
import { useDispatch, useSelector } from "react-redux";
import { ValidateSession } from "../redux/actions/login";
import { useNavigate } from "react-router-dom";

function Main() {
  const { isLoading, tokenSession } = useSelector((state: IReducer) => ({
    isLoading: state.signin.isLoading || state.login.isLoading,
    tokenSession: state.login.tokenSession,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenSession) {
      dispatch(ValidateSession());
    }
  }, []);

  useEffect(() => {
    if (tokenSession) navigate("/shop/1");
  }, [tokenSession]);

  return (
    <div className={`o-main`}>
      {isLoading && <Mask />}
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
