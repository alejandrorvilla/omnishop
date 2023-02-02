import React from "react";
import "@styles/base/input.css";

function InputField(props: IProps) {
  const { placeholder, className = "", type = "text", name, error } = props;

  return (
    <input
      className={`${className} o-input  ${error ? "o-input-error" : ""}`}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}

export interface IProps {
  placeholder: string;
  className?: string;
  type?: "text" | "password" | "email";
  name: string;
  error?: boolean;
}

export default InputField;
