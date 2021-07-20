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
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  // const henleDobleNameAndNumber = (e) => {
  //   switch (e.currentTarget.name) {
  //     case name:
  //       setName(e.currentTarget.value);
  //       break;
  //     case number:
  //       setNumber(e.currentTarget.value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

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
  const pushHandleName = (e) => {
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
          pushHandleName={pushHandleName}
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
// class OldPhonebook extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//     name: "",
//     number: "",
//   };

//   henleDobleNameAndNumber = (e) => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };
//   componentDidMount() {
//     const contactsParse = JSON.parse(localStorage.getItem("contacts"));
//     if (contactsParse) {
//       this.setState({
//         contacts: contactsParse,
//       });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }
//   handleNameFilter = (e) => {
//     this.setState({
//       filter: e.target.value,
//     });
//   }; //+

//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//     toast.error("Contact Deleted");
//   }; //+

//   resetNameAndNumber = () => {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   }; //+

//   pushHandleName = (e) => {
//     const id = uuidv4();
//     e.preventDefault();
//     if (
//       this.state.contacts.some((contact) => contact.name === this.state.name)
//     ) {
//       toast.error("Contact is already added in the phonebook");
//     } else {
//       this.setState((prevState) => ({
//         contacts: [
//           { id: id, name: this.state.name, number: this.state.number },
//           ...prevState.contacts,
//         ],
//       }));
//       toast.success("Contact added");
//       this.resetNameAndNumber();
//     }

//     // this.setState((prevState) => ({
//     //   contacts: [
//     //     prevState.contacts.some((contact) => contact.name === this.state.name)
//     //       ? alert("Такой контакт уже есть, проверьте данные") ?? {}
//     //       : { id: id, name: this.state.name, number: this.state.number },
//     //     ...prevState.contacts,
//     //   ],
//     // }));
//   };

//   render() {
//     return (
//       <SectionContainer>
//         <PhonebookMainTitle>Phonebook</PhonebookMainTitle>
//         <ContainerPhonebookWithoutMainTitle>
//           <ContactForm
//             pushHandleName={this.pushHandleName}
//             henleDobleNameAndNumber={this.henleDobleNameAndNumber}
//             nameValue={this.state.name}
//             numberValue={this.state.number}
//           />

//           <ContactsAndFilterContainer>
//             <PhonebookSecondaryTitle>Contacts</PhonebookSecondaryTitle>
//             <FilterForm handleNameFilter={this.handleNameFilter} />
//             <ContactList
//               contactsState={this.state.contacts}
//               filterState={this.state.filter}
//               deleteContact={this.deleteContact}
//             />
//           </ContactsAndFilterContainer>
//         </ContainerPhonebookWithoutMainTitle>
//         <Toaster
//           position={"top-right"}
//           toastOptions={{
//             error: {
//               iconTheme: {
//                 primary: "tomato",
//                 secondary: "white",
//               },
//             },
//           }}
//         />
//       </SectionContainer>
//     );
//   }
// }
