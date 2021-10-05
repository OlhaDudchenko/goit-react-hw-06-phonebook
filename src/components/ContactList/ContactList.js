import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { del } from "../../redux/phonebook/phonebook-actions";
import PropTypes from "prop-types";
import {
  List,
  ContactsListItem,
  ContactsListButton,
  ContactsListName,
} from "./ContactList.styled";

export function ContactsList() {
  const items = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  return (
    <List>
      {items.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id} id={id}>
            <ContactsListName>
              {name}: {number}
            </ContactsListName>
            <ContactsListButton onClick={() => dispatch(del(id))}>
              Delete
            </ContactsListButton>
          </ContactsListItem>
        );
      })}
    </List>
  );
}

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
