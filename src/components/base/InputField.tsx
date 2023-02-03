import React from "react";
import "@styles/base/input.css";
import Error from "./Error";

function InputField(props: IProps) {
  const {
    placeholder,
    className = "",
    type = "text",
    name,
    error,
    errorMessage,
    required,
    onChange,
    onBlur,
  } = props;

  return (
    <React.Fragment>
      <input
        className={`${className} o-input  ${
          error || errorMessage ? "o-input-error" : ""
        }`}
        placeholder={`${placeholder}${required && error ? "*" : ""}`}
        type={type}
        name={name}
        onChange={(event) => {
          onChange && onChange(event);
        }}
        onBlur={() => {
          onBlur && onBlur();
        }}
      />
      {errorMessage && <Error message={errorMessage} />}
    </React.Fragment>
  );
}

export interface IProps {
  placeholder: string;
  className?: string;
  type?: "text" | "password" | "email";
  name: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export default InputField;
