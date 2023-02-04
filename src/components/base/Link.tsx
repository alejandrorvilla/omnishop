import React from "react";
import "@styles/base/link.css";

function Link(props: IProps) {
  const { text, href } = props;

  return <a target="_blank" className="o-link" href={href}>{text}</a>;
}

interface IProps {
  text: string;
  href: string;
}

export default Link;
