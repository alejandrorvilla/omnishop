import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../../model/product";

export const LoadProducts = createAction("[Product] request for products");

export const ManageProducts = createAction<PayloadCreator<IProduct[]>>(
  "[Product] Save products in state"
);

type PayloadCreator<P> = P | Error;
