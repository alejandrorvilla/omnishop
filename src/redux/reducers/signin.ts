import { AnyAction, createReducer } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import * as Actions from "../actions/signin";

export interface ISigninState {
  isLoading: boolean;
  error?: string;
  success?: boolean;
}

const defaultState: ISigninState = {
  isLoading: false,
};

const signin = (state: ISigninState) => {
  state.isLoading = true;
  state.error = "";
};

const manageSignin = (state: ISigninState) => {
  state.isLoading = false;
  state.success = true;
};

const manageError = (state: ISigninState) => {
  state.isLoading = false;
  state.error = "Ocurrió un error inesperado";
};

const restoreSuccess = (state: ISigninState) => {
  state.success = false;
};

export const SigninReducer: Reducer<ISigninState> = createReducer(
  defaultState,
  {
    [Actions.Signin.type]: signin,
    [Actions.ManageSignin.type]: manageSignin,
    [Actions.ManageError.type]: manageError,
    [Actions.RestoreState.type]: restoreSuccess,
  }
);
