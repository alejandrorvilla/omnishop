import React from "react";
import "@styles/base/checkbox.css";

function CheckBox(props: IProps) {
  const { name, text } = props;

  return (
    <div className="o-checkbox">
      <input type="checkbox" id={name} name={name} />
      <span></span>
      <label htmlFor={name}>{text}</label>
    </div>
  );
}

interface IProps {
  name: string;
  text: string;
}

export default CheckBox;
