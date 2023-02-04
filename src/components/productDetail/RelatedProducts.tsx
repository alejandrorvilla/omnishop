import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../../model/product";
import { IReducer } from "../../redux/store";
import "@styles/product/relatedProducts.css";
import { useNavigate } from "react-router-dom";
import Currency from "../../utils/Currency";

function RelatedProducts(props: IProps) {
  const { relatedProductsIds } = props;
  const products = useSelector((state: IReducer) => state.product.products);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const newRelatedProducts: IProduct[] = [];
    relatedProductsIds.forEach((productId) => {
      newRelatedProducts.push(
        products.find((product) => product.id === productId)
      );
    });
    setRelatedProducts(newRelatedProducts);
  }, [products, relatedProductsIds]);

  return (
    <div className="o-related-products">
      <h2>TAMBIÉN TE PODRÍA GUSTAR</h2>
      <div className="o-related-content">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="o-related-product"
            onClick={() => {
              navigate(`/shop/${product.id}`);
            }}
          >
            <img
              src={require(`@images/products/${product.id}.png`)}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <span>{Currency.formatPrice(product.price.current)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface IProps {
  relatedProductsIds: number[];
}

export default RelatedProducts;
