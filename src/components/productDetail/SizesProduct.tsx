import React, { useEffect, useState } from "react";
import { ISize } from "../../model/product";
import "@styles/product/sizesProduct.css";

function SizesProduct(props: IProps) {
  const { sizes, onSelectSize } = props;
  const [sizeSelected, setSizeSelected] = useState(sizes[0]);

  useEffect(() => {
    onSelectSize(sizeSelected);
  }, [sizeSelected]);

  return (
    <div className="o-product-sizes">
      {sizes &&
        sizes.map((size) => (
          <a
            key={size.size}
            className={`o-size ${
              size.size === sizeSelected.size ? "o-size-selected" : ""
            }`}
            onClick={(event) => {
              event.preventDefault();
              setSizeSelected(size);
            }}
          >
            {size.size}
          </a>
        ))}
    </div>
  );
}

interface IProps {
  sizes: ISize[];
  onSelectSize: (size: ISize) => void;
}

export default SizesProduct;
