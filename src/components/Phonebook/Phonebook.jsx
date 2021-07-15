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
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  henleDobleNameAndNumber = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  componentDidMount() {
    const contactsParse = JSON.parse(localStorage.getItem("contacts"));
    if (contactsParse) {
      this.setState({
        contacts: contactsParse,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
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

  resetNameAndNumber = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  pushHandleName = (e) => {
    const id = uuidv4();
    e.preventDefault();
    if (
      this.state.contacts.some((contact) => contact.name === this.state.name)
    ) {
      alert("Этот контакт уже добавлен в вашу телефонную книгу");
    } else {
      this.setState((prevState) => ({
        contacts: [
          { id: id, name: this.state.name, number: this.state.number },
          ...prevState.contacts,
        ],
      }));
      this.resetNameAndNumber();
    }

    // this.setState((prevState) => ({
    //   contacts: [
    //     prevState.contacts.some((contact) => contact.name === this.state.name)
    //       ? alert("Такой контакт уже есть, проверьте данные") ?? {}
    //       : { id: id, name: this.state.name, number: this.state.number },
    //     ...prevState.contacts,
    //   ],
    // }));
  };

  render() {
    return (
      <SectionContainer>
        <PhonebookMainTitle>Phonebook</PhonebookMainTitle>
        <ContainerPhonebookWithoutMainTitle>
          <ContactForm
            pushHandleName={this.pushHandleName}
            henleDobleNameAndNumber={this.henleDobleNameAndNumber}
            nameValue={this.state.name}
            numberValue={this.state.number}
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
