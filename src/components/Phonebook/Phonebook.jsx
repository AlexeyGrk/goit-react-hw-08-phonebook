import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} from "../../redux/services/contactsApi";

import { changeFilter } from "../../redux/slice/contactSlice";
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

  const [deleteContactHook, { isLoading: isDeleting }] =
    useDeleteContactMutation();
  const [addContactHook, { isLoading: isAdding }] = useAddContactMutation();
  const loggedIn = useSelector((state) => state.setCredentials.isLogin);
  const {
    data = [],
    error,
    isFetching,
    isLoading: isLoadingContacts,
  } = useGetContactsQuery();
  const contacts = data;

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
  const deleteContact = async (contactId) => {
    try {
      await deleteContactHook(contactId);
      toast.error("Contact Deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resetNameAndNumber = () => {
    setName("");
    setNumber("");
  };
  const handleAddContact = async (e) => {
    e.preventDefault();

    if (contacts.some((contact) => contact.name === name)) {
      toast.error(`${name} is already added in the phonebook`);
      return;
    } else {
      try {
        await addContactHook({ name, number });

        toast.success(`${name} added`);
      } catch (error) {
        toast.error(error.message);
      }

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
          isAdding={isAdding}
        />

        <ContactsAndFilterContainer>
          <PhonebookSecondaryTitle>Contacts</PhonebookSecondaryTitle>
          <FilterForm handleNameFilter={handleNameFilter} />

          {!isFetching && data && (
            <ContactList contacts={data} deleteContact={deleteContact} />
          )}
          {isFetching && (
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={60}
              width={60}
              style={{ marginTop: "50px" }}
            />
          )}

          {data.length === 0 && !isFetching && (
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
