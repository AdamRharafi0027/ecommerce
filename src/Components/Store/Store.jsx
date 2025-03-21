import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Slices/CartSlice";
import ProductDetailsReducer from '../Slices/ProductDetailsSlice'
export const store = configureStore({
  reducer: {
    products: CartReducer,
    prodDetail: ProductDetailsReducer,
  },
});
