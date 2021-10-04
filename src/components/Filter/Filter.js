import React from "react";
import PropTypes from "prop-types";
import { ContactListWrapper, ContactListInput } from "./Filter.styled";

export function Filter({ value, onChange }) {
  return (
    <ContactListWrapper>
      <label>Find contacts by name</label>
      <ContactListInput type="text" value={value} onChange={onChange} />
    </ContactListWrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
