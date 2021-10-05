import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { ContactListWrapper, ContactListInput } from "./Filter.styled";

export function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <ContactListWrapper>
      <label>Find contacts by name</label>
      <ContactListInput
        type="text"
        value={value}
        onChange={(event) => dispatch(filterItems(event.target.value))}
      />
    </ContactListWrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
};
