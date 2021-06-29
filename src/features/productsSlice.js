import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prods: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.prods.push(action.payload);
    },
    setProducts: (state, action) => {
      state.prods = action.payload;
    },
  },
});

export const { addProduct, setProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products.prods;
export default productsSlice.reducer;
