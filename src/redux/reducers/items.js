import { ADD_CONTACT, DELETE_CONTACT } from "../types/types";

const initialState = [];
export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
