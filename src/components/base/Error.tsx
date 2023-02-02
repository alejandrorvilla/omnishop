import React from "react";
import "@styles/base/error.css";

function Error(props: IProps) {
  const { message } = props;
  return <span className="o-error">{message}</span>;
}

interface IProps {
  message: string;
}

export default Error;
