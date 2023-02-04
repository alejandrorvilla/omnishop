import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { LoginReducer, ILoginState } from "./reducers/login";
import { SigninReducer, ISigninState } from "./reducers/signin";
import rootSaga from "./middlewares";
import { IProductState, ProductReducer } from "./reducers/product";

export const store = (() => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      login: LoginReducer,
      signin: SigninReducer,
      product: ProductReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
})();

export interface IReducer {
  login: ILoginState;
  signin: ISigninState;
  product: IProductState;
}
