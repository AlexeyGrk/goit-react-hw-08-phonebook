import React from "react";
import {
  ContactCtalog,
  ContactListItem,
  ContactListDeleteButton,
} from "./ContactList.styled";

const ContactList = ({ contactsState, filterState, deleteContact }) => {
  return (
    <ContactCtalog>
      {contactsState
        .filter(
          (contacts) =>
            filterState === "" ||
            contacts.number.toLowerCase().includes(filterState.toLowerCase()) ||
            contacts.name.toLowerCase().includes(filterState.toLowerCase())
        )
        .map(({ id, name, number }, index) => {
          return (
            <ContactListItem key={id}>
              {name} : {number}
              <ContactListDeleteButton onClick={() => deleteContact(id)}>
                x
              </ContactListDeleteButton>
            </ContactListItem>
          );
        })}
    </ContactCtalog>
  );
};

export default ContactList;
