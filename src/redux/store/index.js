import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { contactsApi } from "../services/contactsApi";
import { userApi } from "../services/userApi";
import setCredentials from "../slice/authSlice";
import contactsFilter, { contactSlice } from "../slice/contactSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "../slice/authSlice";

const authPersistConfig = {
  key: "auth",
  whitelist: ["token"],
  storage,
};

export const store = configureStore({
  reducer: {
    contactsFilter,
    setCredentials: persistReducer(authPersistConfig, setCredentials),
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware, userApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
