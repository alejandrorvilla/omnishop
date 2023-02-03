import { AnyAction, createReducer } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import * as Actions from "../actions/signin";

export interface ISigninState {
  isLoading: boolean;
  error?: string;
}

const defaultState: ISigninState = {
  isLoading: false,
};

const signin = (state: ISigninState) => {
  state.isLoading = true;
};

const manageSignin = (state: ISigninState) => {
  state.isLoading = false;
};

const manageError = (state: ISigninState) => {
  state.isLoading = false;
  state.error = "Ocurrió un error inesperado";
};

export const SigninReducer: Reducer<ISigninState> = createReducer(
  defaultState,
  {
    [Actions.Signin.type]: signin,
    [Actions.ManageSignin.type]: manageSignin,
    [Actions.ManageError.type]: manageError,
  }
);
