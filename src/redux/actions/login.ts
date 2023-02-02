import { createAction } from "@reduxjs/toolkit";
import { ILogin } from "../../model/login";

export const Login = createAction<PayloadCreator<ILogin>>("[Login] Login user");

export const ManageLogin = createAction<PayloadCreator<string>>("[Login] Save user info");

export const ManageError = createAction<PayloadCreator<number>>("[Login] Manage error");

export type PayloadCreator<P> = P | Error;