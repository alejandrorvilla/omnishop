import React, { useState } from "react";
import InputField, { IProps as IInputProps } from "./InputField";
import "@styles/base/passwordField.css";

function PasswordField(props: IInputProps) {
  const [isPasswordHide, setPasswordHide] = useState(true);

  return (
    <div className="o-passwordfield">
      <InputField {...props} type={isPasswordHide ? "password" : "text"} />
      <a
        className={`icon icon-password ${isPasswordHide ? "" : "o-selected"}`}
        onClick={() => {
            setPasswordHide(!isPasswordHide);
        }}
      ></a>
    </div>
  );
}

export default PasswordField;
