import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prods: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, actions) => {
      state.prods.push({});
    },
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
