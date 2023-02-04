import React, { useEffect, useState } from "react";
import { IProduct } from "../../model/product";
import Button from "../base/Button";
import RelatedProducts from "./RelatedProducts";
import "@styles/product/product.css";
import Currency from "../../utils/Currency";
import AmountField from "../base/AmountField";
import Link from "../base/Link";
import SizesProduct from "./SizesProduct";
import PunctuationProduct from "./PunctuationProduct";

function Product(props: IProps) {
  const { product } = props;
  const { sizes } = product;
  const [stock, setStock] = useState<number>();

  useEffect(() => {
    if (product.stock) {
      setStock(product.stock);
    }
  }, [product]);

  return (
    <div className="o-product">
      <div className="o-product-banner">
        <img
          src={require(`@images/products/${product.id}.png`)}
          alt={product.title}
        />
      </div>
      <div className="o-product-info">
        <div className="o-product-tags">
          <span className="o-product-new">NEW</span>
          <span className="icon icon-heart"></span>
        </div>
        <div className="o-title">
          <h2>{product.title}</h2>
        </div>
        <PunctuationProduct punctuation={product.punctuation} />
        <div className="o-product-price">
          {product.price.before && (
            <span className="o-before-price">
              {Currency.formatPrice(product.price.before)}
            </span>
          )}
          <span className="o-current-price">
            {Currency.formatPrice(product.price.current)}
          </span>
        </div>
        {sizes && (
          <SizesProduct
            sizes={sizes}
            onSelectSize={(size) => {
              setStock(size.stock);
            }}
          />
        )}
        <div className="o-product-add">
          <AmountField maxNumber={stock as number} />
          <Button type="button" text="Agregar al carrito" />
        </div>
        <div className="o-product-description">
          <h2>DESCRIPCIÓN:</h2>
          <p>{product.description}</p>
          <Link href="https://www.google.com/" text="Leer más" />
        </div>
        <RelatedProducts relatedProductsIds={product.relatedProducts} />
      </div>
    </div>
  );
}

interface IProps {
  product: IProduct;
}

export default Product;
