import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "",
};
export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContactsAction: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addContacts, deleteContactsAction, changeFilter } =
  contactSlice.actions;
export default contactSlice.reducer;
