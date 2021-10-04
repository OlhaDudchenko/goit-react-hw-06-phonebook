import React from "react";
import PropTypes from "prop-types";
import {
  ContactsList,
  ContactsListItem,
  ContactsListButton,
  ContactsListName,
} from "./ContactList.styled";

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id} id={id}>
            <ContactsListName>
              {name}: {number}
            </ContactsListName>
            <ContactsListButton onClick={() => onDeleteContact(id)}>
              Delete
            </ContactsListButton>
          </ContactsListItem>
        );
      })}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
