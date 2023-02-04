import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Mask from "../components/base/Mask";
import Footer from "../components/productDetail/Footer";
import Header from "../components/productDetail/Header";
import Product from "../components/productDetail/Product";
import { IProduct } from "../model/product";
import { ValidateSession } from "../redux/actions/login";
import { LoadProducts } from "../redux/actions/product";
import { IReducer } from "../redux/store";

function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const productId = Number(params.productId);
  const tokenSession = useSelector(
    (state: IReducer) => state.login.tokenSession
  );
  const dispatch = useDispatch();
  const products = useSelector((state: IReducer) => state.product.products);
  const [productSelected, setProductSelected] = useState<IProduct>();

  useEffect(() => {
    if (!tokenSession) {
      dispatch(ValidateSession());
    }
    dispatch(LoadProducts());
  }, []);

  useEffect(() => {
    if (!tokenSession) navigate("/");
  }, []);

  useEffect(() => {
    setProductSelected(products.find((product) => product.id === productId));
  }, [products, productId]);

  return productSelected ? (
    <React.Fragment>
      <Header />
      <Product product={productSelected} />
      <Footer />
    </React.Fragment>
  ) : (
    <Mask />
  );
}

export default ProductDetail;
