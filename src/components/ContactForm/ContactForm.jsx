import { v4 as uuidv4 } from "uuid";
import {
  ContactFromContainer,
  ContactMainForm,
  ContactFormNameLabel,
  ContactFromNameInput,
  ContactFormNumberLabel,
  ContactFromNumberInput,
  ContactFromMainButton,
  ContactFromTitle,
} from "./ContactForm.styled";

const ContactForm = ({
  handleAddContact,
  nameValue,
  numberValue,
  handleChange,
}) => {
  const idFormInputName = uuidv4();
  const idFormInputNumber = uuidv4();

  return (
    <ContactFromContainer>
      <ContactFromTitle>Add contact</ContactFromTitle>
      <ContactMainForm onSubmit={handleAddContact}>
        <ContactFormNameLabel htmlFor={idFormInputName}>
          Name
        </ContactFormNameLabel>
        <ContactFromNameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={nameValue}
          onChange={handleChange}
          id={idFormInputName}
        />

        <ContactFormNumberLabel htmlFor={idFormInputNumber}>
          Number
        </ContactFormNumberLabel>
        <ContactFromNumberInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={numberValue}
          id={idFormInputNumber}
          onChange={handleChange}
        />
        <ContactFromMainButton type="submit">Add contact</ContactFromMainButton>
      </ContactMainForm>
    </ContactFromContainer>
  );
};

export default ContactForm;
