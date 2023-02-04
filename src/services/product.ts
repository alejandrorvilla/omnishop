import { products } from "../data/products";

export const getProducts = () => {
  return new Promise((resolve) => {
    resolve(products);
  });
};
