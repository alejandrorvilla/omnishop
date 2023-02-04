import { AnyAction, createReducer } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import LoginStorage from "../../utils/LoginStorage";
import * as Actions from "../actions/login";

export interface ILoginState {
  tokenSession?: string;
  error?: string;
  isLoading: boolean;
  success?: boolean;
}

const defaultState: ILoginState = {
  isLoading: false,
};

const login = (state: ILoginState) => {
  state.isLoading = true;
};

const manageLogin = (state: ILoginState, action: AnyAction) => {
  const { payload } = action;
  LoginStorage.saveUserSession(payload);
  state.tokenSession = payload.token;
  state.isLoading = false;
  state.success = true;
};

const manageError = (state: ILoginState, action: AnyAction) => {
  const { payload } = action;
  state.isLoading = false;
  state.success = false;
  switch (payload) {
    case 400:
      state.error = "Contraseña incorrecta";
      break;
    default:
      state.error = "Ocurrió un error inesperado";
  }
};

const restoreSuccess = (state: ILoginState) => {
  state.success = false;
};

const logout = (state: ILoginState) => {
  state.tokenSession = "";
};

export const LoginReducer: Reducer<ILoginState> = createReducer(defaultState, {
  [Actions.Login.type]: login,
  [Actions.ManageLogin.type]: manageLogin,
  [Actions.ManageError.type]: manageError,
  [Actions.RestoreState.type]: restoreSuccess,
  [Actions.Logout.type]: logout,
});
