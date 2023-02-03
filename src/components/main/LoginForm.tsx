import React, { useEffect, useRef, useState } from "react";
import Button from "../base/Button";
import CheckBox from "../base/CheckBox";
import InputField from "../base/InputField";
import Link from "../base/Link";
import Error from "../base/Error";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Login } from "../../redux/actions/login";
import { IReducer } from "../../redux/store";
import "@styles/main/loginForm.css";
import PasswordField from "../base/PasswordField";
import Form from "../base/Form";
import { IInput } from "../../hooks/useValidateForm";

function LoginForm() {
  const [isUsernameValid, setUserNameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const dispatch = useDispatch();
  const errorApi = useSelector((state: IReducer) => state.login.error);
  const inputsList: IInput[] = [
    {
      name: "email",
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
      errorMessage: errorApi,
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
        username: data.user as string,
        password: data.password as string,
      })
    );
  };

  return (
    <div>
      <Form
        inputs={inputsList}
        onSubmit={onSubmit}
        textButton="Regístrate"
        title="Ingresa con tus datos"
        usePasswordField={true}
      />
      <Link text="¿Olvidaste tu contraseña?" href="https://www.google.com" />
    </div>
  );
}

export default LoginForm;
