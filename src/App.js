import React, { useState, useEffect } from "react";
import { Section } from "./components/Section";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";
import { DropDown } from "./components/DropDownMenu/DropDownMenu";
import { contactsList } from "./services/contacts";
import { AppWrapper } from "./App.styled";

export function App() {
  const [contacts, setContacts] = useState(contactsList);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contactsLocal = localStorage.getItem("contactsLocal");
    const parsedContacts = JSON.parse(contactsLocal);

    setContacts(parsedContacts ?? contactsList);
  }, []);

  useEffect(() => {
    localStorage.setItem("contactsLocal", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const filteredContact = contacts.find(
      (contact) => contact.name === newContact.name
    );

    filteredContact
      ? alert(`${newContact.name}is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  return (
    <AppWrapper>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />

        <ContactList
          contacts={getVisibleContact()}
          onDeleteContact={deleteContact}
        />
      </Section>
      <DropDown />
    </AppWrapper>
  );
}
