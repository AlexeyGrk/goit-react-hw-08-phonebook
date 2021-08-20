import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  token: {},
};
export const contactSlice = createSlice({
  name: "contactsFilter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { changeFilter, setToken } = contactSlice.actions;
export default contactSlice.reducer;
