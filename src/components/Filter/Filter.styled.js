import styled from "@emotion/styled";

export const ContactListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 18px;
`;
export const ContactListInput = styled.input`
  width: 200px;
  margin: 0;
  margin-top: 4px;
  padding: 5px;
  font: inherit;
  font-size: 18px;
  border-radius: 4px;
  border: ${(props) => `3px solid ${props.theme.colors.BorderColor}`};
  background-color: ${(props) => props.theme.colors.InputColor};
  transition: ${(props) =>
      `transform${props.theme.colors.animation} ${props.theme.colors.time}`},
    ${(props) =>
      `box-shadow${props.theme.colors.animation} ${props.theme.colors.time}`};
  &:hover,
  &:focus {
    box-shadow: ${(props) => `0 0 10px${props.theme.colors.white}`};
    transform: scale(1);
  }
`;
