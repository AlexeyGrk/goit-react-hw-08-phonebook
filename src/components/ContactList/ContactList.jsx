import { useSelector } from "react-redux";
import {
  ContactCtalog,
  ContactListItem,
  ContactListDeleteButton,
  TestTeg,
} from "./ContactList.styled";

const ContactList = ({ deleteContact, contacts }) => {
  const filterState = useSelector((state) => state.contactsFilter.filter);
  const contactsFilteredData = contacts.filter(
    (contacts) =>
      filterState === "" ||
      contacts.number.toLowerCase().includes(filterState.toLowerCase()) ||
      contacts.name.toLowerCase().includes(filterState.toLowerCase())
  );
  return (
    <>
      {/* {contacts.length !== 0 && filterState !== "" && <TestTeg>Hallo</TestTeg>} */}
      <ContactCtalog>
        {/* {filterState !== "" && !contacts.number && <h1>Хелло</h1>} */}
        {/* {filterState !== "" && contacts.length === 0 && <TestTeg>Hallo</TestTeg>} */}

        {contactsFilteredData.length > 0 ? (
          contactsFilteredData.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id}>
                {name} : {number}
                <ContactListDeleteButton onClick={() => deleteContact(id)}>
                  x
                </ContactListDeleteButton>
              </ContactListItem>
            );
          })
        ) : (
          <TestTeg>
            <p> No results were found for your request</p>
            <img
              width="120"
              src="https://img.icons8.com/ios/50/000000/user-not-found.png"
              alt="NotFoundImg"
            />
          </TestTeg>
        )}
      </ContactCtalog>
    </>
  );
};

export default ContactList;
