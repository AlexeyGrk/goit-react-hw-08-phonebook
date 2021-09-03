import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, token: null, isLogin: false },
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLogin = true;
    },
    unSetCredentials: (state) => {
      state.user = {};
      state.token = null;
      state.isLogin = false;
    },
  },
});

export const { setCredentials, unSetCredentials } = authSlice.actions;

export default authSlice.reducer;
