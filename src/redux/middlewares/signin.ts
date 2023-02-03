import { AnyAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import * as SigninServices from "../../services/signin";
import * as SigninActions from "../actions/signin";

export function* signin(action: AnyAction) {
  try {
    const sessionToken: Promise<string> = yield call(
      SigninServices.signin,
      action.payload
    );
    yield put({ type: SigninActions.ManageSignin.type, payload: sessionToken });
  } catch (error) {
    yield put({ type: SigninActions.ManageError.type, payload: error });
  }
}
