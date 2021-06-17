import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        prodId: action.payload.id,
        name: action.payload.name,
        prodImg: action.payload.image,
        price: action.payload.price,
        value: action.payload.value,
        totalPrice:
          parseInt(action.payload.price, 10) *
          parseInt(action.payload.value, 10),
      });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.prodId !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.items;
export default cartSlice.reducer;
