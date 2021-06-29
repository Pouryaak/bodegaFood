import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
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
        state.items[existingItemIndex].totalPrice += parseInt(
          state.items[existingItemIndex].price
        );
        state.totalAmount += parseInt(state.items[existingItemIndex].price);
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
        state.totalAmount += parseInt(action.payload.price);
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
        state.items[existingItemIndex].totalPrice += parseInt(
          state.items[existingItemIndex].price
        );
        state.totalAmount += parseInt(state.items[existingItemIndex].price);
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
          state.items[existingItemIndex].totalPrice -= parseInt(
            state.items[existingItemIndex].price
          );
          state.totalAmount -= parseInt(state.items[existingItemIndex].price);
        } else {
          state.totalAmount -= parseInt(state.items[existingItemIndex].price);
          state.items = state.items.filter(
            (item) => item.prodId !== action.payload
          );
        }
      }
    },
    emptyCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItem,
  decreaseItem,
  emptyCart,
} = cartSlice.actions;
export const selectCart = (state) => state.cart.items;
export const selectCartAmount = (state) => state.cart.totalAmount;
export default cartSlice.reducer;
