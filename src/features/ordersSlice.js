import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { addOrder, setOrders } = ordersSlice.actions;
export const selectOrders = (state) => state.orders.orders;
export default ordersSlice.reducer;
