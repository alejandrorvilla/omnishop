import React, { useEffect, useState } from "react";
import Link from "../base/Link";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Login, RestoreState } from "../../redux/actions/login";
import { IReducer } from "../../redux/store";
import "@styles/main/loginForm.css";
import Form from "../base/Form";
import { IInput } from "../../hooks/useValidateForm";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [isUsernameValid, setUserNameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: IReducer) => state.login);
  const inputsList: IInput[] = [
    {
      name: "username",
      type: "text",
      placeholder: "Email o nombre de usuario",
      setValid: setUserNameValid,
      isValid: isUsernameValid,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Ingresa contraseña",
      setValid: setPasswordValid,
      isValid: isPasswordValid,
      errorMessage: error,
    },
    {
      name: "subscribe",
      type: "checkbox",
      label: "Subscribete al newsletter",
    },
  ];

  const onSubmit = (data: Record<string, string>) => {
    dispatch(
      Login({
        username: data.username as string,
        password: data.password as string,
      })
    );
  };

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
    return () => {
      dispatch(RestoreState());
    };
  }, [success]);

  return (
    <div>
      <Form
        inputs={inputsList}
        onSubmit={onSubmit}
        textButton="Ingresa"
        title="Ingresa con tus datos"
        usePasswordField={true}
      />
      <Link text="¿Olvidaste tu contraseña?" href="https://www.google.com" />
    </div>
  );
}

export default LoginForm;
