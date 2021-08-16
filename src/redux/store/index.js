import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

import contacts from "../slice/contactSlice";

// const rootReducer = combineReducers({
//   contacts,
// });

export const store = configureStore({
  reducer: {
    contacts,
  },

  devTools: process.env.NODE_ENV !== "production",
});
