import React from "react";
import "@styles/product/punctuationProduct.css";

function PunctuationProduct(props: IProps) {
  const { punctuation } = props;
  return (
    <div className="o-product-punctuation">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`icon icon-star${star <= punctuation ? "" : "-empty"}`}
        ></span>
      ))}
    </div>
  );
}

interface IProps {
  punctuation: number;
}

export default PunctuationProduct;
