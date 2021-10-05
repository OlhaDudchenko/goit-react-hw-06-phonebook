import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ContactsListItem = styled.li`
  display: flex;
  align-items: baseline;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactsListButton = styled.button`
  margin: 0;
  margin-left: 8px;
  padding: 3px;
  width: 80px;
  font: inherit;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  border: ${(props) => `3px solid ${props.theme.colors.BorderColor}`};
  background-color: ${(props) => props.theme.colors.ButtonColor};
  cursor: pointer;
  transition: ${(props) =>
      `transform${props.theme.colors.animation} ${props.theme.colors.time}`},
    ${(props) =>
      `box-shadow${props.theme.colors.animation} ${props.theme.colors.time}`};
  &:hover,
  &:focus {
    box-shadow: ${(props) => `0 0 10px${props.theme.colors.white}`};
    transform: scale(1.1);
  }
`;
export const ContactsListName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
`;
