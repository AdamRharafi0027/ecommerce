import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Slices/CartSlice";

export const store = configureStore({
  reducer: {
    products: CartReducer,
  },
});
