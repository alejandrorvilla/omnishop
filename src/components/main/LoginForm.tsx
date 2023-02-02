import React, { useRef } from "react";
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

function LoginForm() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const error = useSelector((state: IReducer) => state.login.error);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    dispatch(
      Login({
        username: formData.get("user") as string,
        password: formData.get("password") as string,
      })
    );
  };

  return (
    <form className="o-login-form" ref={formRef} onSubmit={onSubmit}>
      <h2>Ingresa con tus datos</h2>
      <InputField placeholder="Email o nombre de usuario" name="user" />
      <PasswordField
        placeholder="Ingresa contraseña"
        name="password"
        error={!!error}
      />
      {error && <Error message={error} />}
      <CheckBox text="Subscribete al newsletter" name="subscribe" />
      <Button type="submit" text="Ingresa" />
      <Link text="¿Olvidaste tu contraseña?" href="https://www.google.com" />
    </form>
  );
}

export default LoginForm;
