import { ADD_CONTACT, DELETE_CONTACT } from "../types/types";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});
export const deleteContactAction = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
