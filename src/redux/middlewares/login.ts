import { AnyAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import * as LoginServices from "../../services/login";
import UserStorage from "../../utils/UserStorage";
import * as LoginActions from "../actions/login";

export function* login(action: AnyAction) {
  try {
    const data: Promise<Record<string, string>> = yield call(
      LoginServices.login,
      action.payload
    );
    yield put({ type: LoginActions.ManageLogin.type, payload: data });
  } catch (error) {
    yield put({ type: LoginActions.ManageError.type, payload: error });
  }
}

export function* validateSession(action: AnyAction) {
  const data = UserStorage.getUserInfo();
  if (data) {
    yield put({ type: LoginActions.ManageLogin.type, payload: data });
  }
}
