import { AnyAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import * as LoginServices from "../../services/login";
import * as LoginActions from "../actions/login";

export function* login(action: AnyAction) {
  try {
    const sessionToken: Promise<string> = yield call(
      LoginServices.login,
      action.payload
    );
    yield put({ type: LoginActions.ManageLogin.type, payload: sessionToken });
  } catch (error) {
    yield put({ type: LoginActions.ManageError.type, payload: error });
  }
}
