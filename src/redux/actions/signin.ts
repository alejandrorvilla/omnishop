import { createAction } from "@reduxjs/toolkit";
import { IUser } from "../../model/user";

export const Signin = createAction<PayloadCreator<IUser>>(
  "[Signin] Signin user"
);

export const ManageSignin = createAction<PayloadCreator<string>>(
  "[Signin] Save user info"
);

export const ManageError = createAction<PayloadCreator<number>>(
  "[Signin] Manage error"
);

export const RestoreState = createAction("[Signin] restore state");

type PayloadCreator<P> = P | Error;
