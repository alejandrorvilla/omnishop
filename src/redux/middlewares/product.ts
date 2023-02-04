import { AnyAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { IProduct } from "../../model/product";
import * as ProductServices from "../../services/product";
import * as ProductActions from "../actions/product";

export function* loadProducts(action: AnyAction) {
  const products: Promise<IProduct[]> = yield call(ProductServices.getProducts);
  yield put({
    type: ProductActions.ManageProducts.type,
    payload: products,
  });
}
