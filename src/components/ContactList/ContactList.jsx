import { useSelector } from "react-redux";
import {
  ContactCtalog,
  ContactListItem,
  ContactListDeleteButton,
} from "./ContactList.styled";

const ContactList = ({ deleteContact }) => {
  const contacts = useSelector((state) => state.contacts.items);
  const filterState = useSelector((state) => state.contacts.filter);

  return (
    <ContactCtalog>
      {contacts
        .filter(
          (contacts) =>
            filterState === "" ||
            contacts.number.toLowerCase().includes(filterState.toLowerCase()) ||
            contacts.name.toLowerCase().includes(filterState.toLowerCase())
        )
        .map(({ id, name, number }) => {
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
