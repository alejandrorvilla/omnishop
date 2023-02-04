import React from "react";
import { createPortal } from "react-dom";
import "@styles/base/mask.css";

function Mask() {
  return createPortal(
    <div className="o-mask">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>,
    document.querySelector("#mask") as Element
  );
}

export default Mask;
