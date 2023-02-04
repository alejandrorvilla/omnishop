import { takeLatest } from "redux-saga/effects";
import * as LoginActions from "../actions/login";
import * as LoginMiddlewares from "./login";
import * as SigninActions from "../actions/signin";
import * as SigninMiddlewares from "./signin";
import * as ProductActions from "../actions/product";
import * as ProductMiddlewares from "./product";

export default function* rootSaga() {
  yield takeLatest(LoginActions.Login.type, LoginMiddlewares.login);
  yield takeLatest(SigninActions.Signin.type, SigninMiddlewares.signin);
  yield takeLatest(ProductActions.LoadProducts.type, ProductMiddlewares.loadProducts);
}
