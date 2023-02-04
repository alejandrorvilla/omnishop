import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { Signin, RestoreState } from "../../redux/actions/signin";
import { IReducer } from "../../redux/store";
import { IInput } from "../../hooks/useValidateForm";
import Form from "../base/Form";

function SignInForm() {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: IReducer) => state.signin);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (success) {
      navigate("/signin");
    }
    return () => {
      dispatch(RestoreState());
    };
  }, [success]);

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
      errorMessage={error}
      title="Completa tus datos para registrarte"
    />
  );
}

export default SignInForm;
