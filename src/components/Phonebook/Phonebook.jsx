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
  const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
  };
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useLocalStorage("filter", "");
  const [name, setName] = useLocalStorage("name", "");
  const [number, setNumber] = useLocalStorage("number", "");

  // useEffect(() => {
  //   const contactsParse = JSON.parse(localStorage.getItem("contacts"));
  //   if (contactsParse) {
  //     setContacts(contactsParse);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);
  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

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
          handleChange={handleChange}
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
