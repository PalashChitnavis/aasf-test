/* eslint-disable no-unused-vars */
// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  domains: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload.item);
      state.domains.push(action.payload.domain);
    },
    removeItem(state, action) {
      const index = state.items.indexOf(action.payload.item);
      state.items.splice(index, 1);
      const dindex = state.domains.indexOf(action.payload.domain);
      state.domains.splice(dindex, 1);
    },
    clearCart(state) {
      state.items = [];
      state.domains = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
