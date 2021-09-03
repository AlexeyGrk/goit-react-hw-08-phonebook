import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: { user: {}, token: {}, isLogin: false },
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLogin = true;
    },
    unSetCredentials: (state) => {
      state.user = {};
      state.token = {};
      state.isLogin = false;
    },
  },
});

export const { setCredentials, unSetCredentials } = slice.actions;

export default slice.reducer;
