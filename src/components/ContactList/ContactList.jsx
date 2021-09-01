import { useSelector } from "react-redux";
import { getFilterState } from "../../redux/selectors/contacts-selectors";
import {
  ContactCtalog,
  ContactListItem,
  ContactListDeleteButton,
  NotFoundContainer,
  ContactListDeleteButtonText,
} from "./ContactList.styled";

const ContactList = ({ deleteContact, contacts }) => {
  const filterState = useSelector(getFilterState);
  const contactsFilteredData = contacts.filter(
    (contacts) =>
      filterState === "" ||
      contacts.number.toLowerCase().includes(filterState.toLowerCase()) ||
      contacts.name.toLowerCase().includes(filterState.toLowerCase())
  );
  return (
    <>
      <ContactCtalog>
        {contactsFilteredData.length > 0 || filterState === "" ? (
          contactsFilteredData.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id}>
                {name} : {number}
                <ContactListDeleteButton onClick={() => deleteContact(id)}>
                  <ContactListDeleteButtonText>-</ContactListDeleteButtonText>
                </ContactListDeleteButton>
              </ContactListItem>
            );
          })
        ) : (
          <NotFoundContainer>
            <p> No results were found for your request</p>
            <img
              width="120"
              src="https://img.icons8.com/ios/50/000000/user-not-found.png"
              alt="NotFoundImg"
            />
          </NotFoundContainer>
        )}
      </ContactCtalog>
    </>
  );
};

export default ContactList;
