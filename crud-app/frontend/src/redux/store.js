// store.js
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import cartReducer from "./cartSlice";
import pageReducer from "./pageSlice";
import dataReducer from "./dataSlice";
const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    page: pageReducer,
    data: dataReducer,
  },
});

export default store;
