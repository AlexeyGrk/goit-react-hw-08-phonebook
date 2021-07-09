import React, { Component } from "react";
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

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  henleDobleNameAndNumber = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleNameFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  pushHandleName = (e) => {
    const id = uuidv4();
    e.preventDefault();

    this.setState((prevState) => ({
      contacts: [
        prevState.contacts.some((contact) => contact.name === this.state.name)
          ? alert("Такой контакт уже есть, проверьте данные") ?? {
              id: id,
              name: this.state.name,
              number: this.state.number,
            }
          : { id: id, name: this.state.name, number: this.state.number },
        ...prevState.contacts,

        // ...prevState.contacts,
        // { id: id, name: this.state.name, number: this.state.number },
      ],
    }));
  };

  render() {
    return (
      <SectionContainer>
        <PhonebookMainTitle>Phonebook</PhonebookMainTitle>
        <ContainerPhonebookWithoutMainTitle>
          <ContactForm
            pushHandleName={this.pushHandleName}
            henleDobleNameAndNumber={this.henleDobleNameAndNumber}
          />
          <ContactsAndFilterContainer>
            <PhonebookSecondaryTitle>Contacts</PhonebookSecondaryTitle>
            <FilterForm handleNameFilter={this.handleNameFilter} />
            <ContactList
              contactsState={this.state.contacts}
              filterState={this.state.filter}
              deleteContact={this.deleteContact}
            />
          </ContactsAndFilterContainer>
        </ContainerPhonebookWithoutMainTitle>
      </SectionContainer>
    );
  }
}

export default Phonebook;
