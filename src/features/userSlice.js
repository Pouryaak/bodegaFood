import { createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../firebase";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    updateAddress: (state, action) => {
      state.user.addresses = action.payload;
    },
  },
});

export const logoutApp = () => {
  return (dispatch) => {
    auth.signOut();
    dispatch(logout());
  };
};
export const updateAddressApp = (address) => {
  return async (dispatch, getState) => {
    const userRef = db.collection("users").doc(getState().user.user.docId);
    await userRef.update({ addresses: address });
    dispatch(updateAddress(address));
  };
};

export const { login, logout, updateAddress } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
