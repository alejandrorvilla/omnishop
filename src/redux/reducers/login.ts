import { AnyAction, createReducer } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import UserStorage from "../../utils/UserStorage";
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
  UserStorage.saveUserInfo(payload);
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

export const LoginReducer: Reducer<ILoginState> = createReducer(defaultState, {
  [Actions.Login.type]: login,
  [Actions.ManageLogin.type]: manageLogin,
  [Actions.ManageError.type]: manageError,
  [Actions.RestoreState.type]: restoreSuccess,
});
