import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputWrapper, Input, FormButton } from "./ContactForm.styled";

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChangeName = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = { id: uuidv4(), name, number };
    onSubmit(newContact);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <label htmlFor={nameInputId}>Name</label>
        <Input
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeName}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor={numberInputId}>Number</label>
        <Input
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeName}
        />
      </InputWrapper>
      <FormButton type="submit">Add contact</FormButton>
    </form>
  );
}
