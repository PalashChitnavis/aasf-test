/* eslint-disable no-unused-vars */
// pageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const pageSlice = createSlice({
  name: "pageSlice",
  initialState,
  reducers: {
    nextPage(state) {
      state.number = state.number + 1;
    },
    prevPage(state) {
      if (state.number != 0) {
        state.number = state.number - 1;
      }
    },
    setPage(state, action) {
      state.number = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPage } = pageSlice.actions;
export default pageSlice.reducer;
