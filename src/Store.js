import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slice/CartSlice";

const store = configureStore({
  devTools: false,
  reducer: {
    cart: CartReducer,
  },
});

export default store;
