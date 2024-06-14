/* eslint-disable no-unused-vars */
// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setData(state, action) {
      action.payload.forEach((user) => state.users.push(user));
    },
    resetData(state) {
      state.users = [];
      state.users.length = 0;
    },
  },
});

export const { setData, resetData } = dataSlice.actions;
export default dataSlice.reducer;
