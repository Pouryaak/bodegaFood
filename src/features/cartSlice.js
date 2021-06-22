import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.prodId === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        state.items[existingItemIndex].value += 1;
        state.items[existingItemIndex].totalPrice +=
          state.items[existingItemIndex].price;
      } else {
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
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.prodId !== action.payload.id
      );
    },
    increaseItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.prodId === action.payload
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        state.items[existingItemIndex].value += 1;
        state.items[existingItemIndex].totalPrice +=
          state.items[existingItemIndex].price;
      }
    },
    decreaseItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.prodId === action.payload
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        if (existingItem.value > 1) {
          state.items[existingItemIndex].value -= 1;
          state.items[existingItemIndex].totalPrice -=
            state.items[existingItemIndex].price;
        } else {
          state.items = state.items.filter(
            (item) => item.prodId !== action.payload
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseItem, decreaseItem } =
  cartSlice.actions;
export const selectCart = (state) => state.cart.items;
export default cartSlice.reducer;
