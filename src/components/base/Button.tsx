import React from "react";
import "@styles/base/button.css";

function Button(props: IProps) {
  const { text, className = "", type = "button", mode = "purple", onClick } = props;

  return (
    <button
      className={`${className} o-button o-button-${mode}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

interface IProps {
  text: string;
  type?: "button" | "submit";
  mode?: "purple" | "white";
  className?: string;
  onClick?: () => void;
}

export default Button;
