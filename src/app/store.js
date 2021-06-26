import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productsReducer from "../features/productsSlice";
import userReducer from "../features/userSlice";
import ordersReducer from "../features/ordersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
    orders: ordersReducer,
  },
});
