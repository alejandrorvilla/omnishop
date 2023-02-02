import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { LoginReducer, ILoginState } from "./reducers/login";
import rootSaga from "./middlewares";

export const store = (() => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      login: LoginReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
})();

export interface IReducer {
  login: ILoginState;
}
