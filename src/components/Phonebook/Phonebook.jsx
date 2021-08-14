import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addContacts,
  deleteContactsAction,
  changeFilter,
} from "../../redux/slice/contactSlice";
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
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
  };

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
    dispatch(changeFilter(e.target.value));
  };
  const deleteContact = (contactId) => {
    dispatch(deleteContactsAction(contactId));
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
      dispatch(addContacts({ id: id, name, number }));
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
          {contacts.length > 0 ? (
            <ContactList deleteContact={deleteContact} />
          ) : (
            <PhonebookSecondaryTitle>
              Add please new contacts
            </PhonebookSecondaryTitle>
          )}
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
