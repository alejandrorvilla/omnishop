import React from "react";
import "@styles/base/input.css";

function InputField(props: IProps) {
  const {
    placeholder,
    className = "",
    type = "text",
    name,
    error,
    required,
    onChange,
    onBlur,
  } = props;

  return (
    <input
      className={`${className} o-input  ${error ? "o-input-error" : ""}`}
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
  );
}

export interface IProps {
  placeholder: string;
  className?: string;
  type?: "text" | "password" | "email";
  name: string;
  error?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export default InputField;
