import { AnyAction, createReducer } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import UserStorage from "../../utils/UserStorage";
import * as Actions from "../actions/login";

export interface ILoginState {
  tokenSession?: string;
  error?: string;
}

const defaultState: ILoginState = {};

const manageLogin = (state: ILoginState, action: AnyAction) => {
  const { payload } = action;
  UserStorage.saveUserInfo(payload);
  state.tokenSession = payload.token;
};

const manageError = (state: ILoginState, action: AnyAction) => {
  const { payload } = action;
  switch (payload) {
    case 400:
      state.error = "Contraseña incorrecta";
      break;
    default:
      state.error = "Ocurrió un error inesperado";
  }
};

export const LoginReducer: Reducer<ILoginState> = createReducer(defaultState, {
  [Actions.ManageLogin.type]: manageLogin,
  [Actions.ManageError.type]: manageError,
});
