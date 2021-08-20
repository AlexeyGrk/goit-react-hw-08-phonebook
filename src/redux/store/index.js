import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { contactsApi } from "../services/contactsApi";
import { userApi } from "../services/userApi";
import contactsFilter from "../slice/contactSlice";

export const store = configureStore({
  reducer: {
    contactsFilter,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware, userApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);
