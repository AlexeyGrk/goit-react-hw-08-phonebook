import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import { rootReducer } from "../reducers";
import contacts from "../slice/contactSlice";
// export const store = createStore(rootReducer, devToolsEnhancer());

export const store = configureStore({
  reducer: {
    contacts,
  },
  devTools: process.env.NODE_ENV !== "production",
});
