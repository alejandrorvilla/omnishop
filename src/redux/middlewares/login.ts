import { AnyAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { IUser } from "../../model/user";
import * as LoginServices from "../../services/login";
import LoginStorage from "../../utils/LoginStorage";
import SigninStorage from "../../utils/SigninStorage";
import * as LoginActions from "../actions/login";

export function* login(action: AnyAction) {
  try {
    const userInStorage: IUser = SigninStorage.getUserInfo(action.payload);
    let data: Promise<IUser> | IUser;
    if (userInStorage) {
      data = userInStorage;
      data.token = "T0k3nDpRuB4";
    } else {
      data = yield call(LoginServices.login, action.payload);
    }
    yield put({ type: LoginActions.ManageLogin.type, payload: data });
  } catch (error) {
    yield put({ type: LoginActions.ManageError.type, payload: error });
  }
}

export function* validateSession() {
  const data = LoginStorage.getUserSession();
  if (data) {
    yield put({ type: LoginActions.ManageLogin.type, payload: data });
  }
}
