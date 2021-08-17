import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { contactsApi } from "../services/contactsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactsApi } from "../services/contactsApi";

import contactsFilter from "../slice/contactSlice";

// const rootReducer = combineReducers({
//   contacts,
// });

export const store = configureStore({
  reducer: {
    contactsFilter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);
