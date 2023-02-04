import { AnyAction, createReducer } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import { IProduct } from "../../model/product";
import * as Actions from "../actions/product";

export interface IProductState {
  products: IProduct[];
}

const defaultState: IProductState = {
  products: [],
};

const manageProducts = (state: IProductState, action: AnyAction) => {
  state.products = action.payload;
};

export const ProductReducer: Reducer<IProductState> = createReducer(
  defaultState,
  {
    [Actions.ManageProducts.type]: manageProducts,
  }
);
