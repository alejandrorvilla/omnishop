import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Signin } from "../../redux/actions/signin";
import { IReducer } from "../../redux/store";
import { IInput } from "../../hooks/useValidateForm";
import Form from "../base/Form";

function SignInForm() {
  const dispatch = useDispatch();
  const errorApi = useSelector((state: IReducer) => state.signin.error);
  const [isFirstNameValid, setFirstNameValid] = useState(true);
  const [isLastNameValid, setLastNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const inputsList: IInput[] = [
    {
      name: "firstName",
      type: "text",
      placeholder: "Nombre",
      setValid: setFirstNameValid,
      isValid: isFirstNameValid,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Apellido",
      setValid: setLastNameValid,
      isValid: isLastNameValid,
    },
    {
      name: "email",
      type: "email",
      placeholder: "E-mail",
      setValid: setEmailValid,
      isValid: isEmailValid,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      setValid: setPasswordValid,
      isValid: isPasswordValid,
    },
  ];

  const onSubmit = (data: Record<string, string>) => {
    dispatch(
      Signin({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <Form
      inputs={inputsList}
      onSubmit={onSubmit}
      textButton="Regístrate"
      errorMessage={errorApi}
    />
  );
}

export default SignInForm;
