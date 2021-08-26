import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: { user: "", token: {}, isLogin: false },
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLogin = true;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;
