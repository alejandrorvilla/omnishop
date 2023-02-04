import { AnyAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import * as SigninServices from "../../services/signin";
import SigninStorage from "../../utils/SigninStorage";
import * as SigninActions from "../actions/signin";

export function* signin(action: AnyAction) {
  try {
    yield call(SigninServices.signin, action.payload);
    if (SigninStorage.signinUser(action.payload)) {
      yield put({ type: SigninActions.ManageSignin.type });
    } else {
      yield put({ type: SigninActions.ManageError.type });
    }
  } catch (error) {
    yield put({ type: SigninActions.ManageError.type, payload: error });
  }
}
