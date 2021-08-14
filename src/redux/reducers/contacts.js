import { combineReducers } from "redux";
import { filterContact } from "./filter";
import { itemsReducer } from "./items";

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterContact,
});
