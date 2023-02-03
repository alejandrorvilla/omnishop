import { takeLatest } from "redux-saga/effects";
import * as LoginActions from "../actions/login";
import * as SigninActions from "../actions/signin";
import * as LoginMiddlewares from "./login";
import * as SigninMiddlewares from "./signin";

export default function* rootSaga() {
  yield takeLatest(LoginActions.Login.type, LoginMiddlewares.login);
  yield takeLatest(SigninActions.Signin.type, SigninMiddlewares.signin);
}
