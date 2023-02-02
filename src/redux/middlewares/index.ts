import { takeLatest } from "redux-saga/effects";
import * as LoginActions from "../actions/login";
import * as LoginMiddlewares from "./login";

export default function* rootSaga() {
  yield takeLatest(LoginActions.Login.type, LoginMiddlewares.login);
}