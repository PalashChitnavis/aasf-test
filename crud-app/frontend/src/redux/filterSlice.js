/* eslint-disable no-unused-vars */
// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  domain: "Domains",
  gender: "Genders",
  availability: "Availability",
  search: "",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    updateDomain(state, action) {
      state.domain = action.payload;
    },
    updateGender(state, action) {
      state.gender = action.payload;
    },
    updateAvailability(state, action) {
      state.availability = action.payload;
    },
    updateSearch(state, action) {
      state.search = action.payload;
    },
    resetAll(state) {
      state.domain = "Domains";
      state.gender = "Genders";
      state.availability = "Availability";
      state.search = "";
    },
  },
});

export const {
  updateDomain,
  updateGender,
  updateAvailability,
  updateSearch,
  resetAll,
} = filterSlice.actions;
export default filterSlice.reducer;
