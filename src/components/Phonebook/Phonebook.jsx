import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { v4 as uuidv4 } from "uuid";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import FilterForm from "../FilterForm/FilterForm";
import {
  PhonebookMainTitle,
  PhonebookSecondaryTitle,
  SectionContainer,
  ContactsAndFilterContainer,
  ContainerPhonebookWithoutMainTitle,
} from "./Phonebook.styled";

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (e) => {
    setName(e.currentTarget.value);
  };
  const handleNumber = (e) => {
    setNumber(e.currentTarget.value);
  };

  useEffect(() => {
    const contactsParse = JSON.parse(localStorage.getItem("contacts"));
    if (contactsParse) {
      setContacts(contactsParse);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleNameFilter = (e) => {
    setFilter(e.target.value);
  };
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
    toast.error("Contact Deleted");
  };
  const resetNameAndNumber = () => {
    setName("");
    setNumber("");
  };
  const handleAddContact = (e) => {
    const id = uuidv4();
    e.preventDefault();
    if (contacts.some((contact) => contact.name === name)) {
      toast.error("Contact is already added in the phonebook");
      return;
    } else {
      setContacts([{ id: id, name, number }, ...contacts]);
      toast.success("Contact added");
      resetNameAndNumber();
    }
  };
  return (
    <SectionContainer>
      <PhonebookMainTitle>Phonebook</PhonebookMainTitle>
      <ContainerPhonebookWithoutMainTitle>
        <ContactForm
          handleAddContact={handleAddContact}
          handleName={handleName}
          handleNumber={handleNumber}
          nameValue={name}
          numberValue={number}
        />

        <ContactsAndFilterContainer>
          <PhonebookSecondaryTitle>Contacts</PhonebookSecondaryTitle>
          <FilterForm handleNameFilter={handleNameFilter} />
          <ContactList
            contactsState={contacts}
            filterState={filter}
            deleteContact={deleteContact}
          />
        </ContactsAndFilterContainer>
      </ContainerPhonebookWithoutMainTitle>
      <Toaster
        position={"top-right"}
        toastOptions={{
          error: {
            iconTheme: {
              primary: "tomato",
              secondary: "white",
            },
          },
        }}
      />
    </SectionContainer>
  );
};

export default Phonebook;
