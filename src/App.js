import React from "react";
import { Section } from "./components/Section";
import { ContactForm } from "./components/ContactForm";
import { ContactsList } from "./components/ContactList";
import { Filter } from "./components/Filter";
import { DropDown } from "./components/DropDownMenu/DropDownMenu";
import { AppWrapper } from "./App.styled";

function App() {
  return (
    <AppWrapper>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
      <DropDown />
    </AppWrapper>
  );
}

export default App;
