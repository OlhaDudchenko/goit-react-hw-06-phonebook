import styled from "@emotion/styled";

export const Dropdown = styled.div`
  position: absolute;
  top: 13vh;
  right: 10vw;
  display: flex;
  flex-direction: column;
`;
export const ThemmeButton = styled.button`
  margin: 0;
  margin-top: 5px;
  padding: 5px 10px;
  font: inherit;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  border: ${(props) => `3px solid ${props.theme.colors.BorderColor}`};
  background-color: ${(props) => props.theme.colors.ButtonColor};
  cursor: pointer;
  transition: ${(props) =>
      `transform${props.theme.animation} ${props.theme.time}`},
    ${(props) => `box-shadow${props.theme.animation} ${props.theme.time}`};
  &:hover,
  &:focus {
    box-shadow: ${(props) => `0 0 10px${props.theme.colors.white}`};
    transform: scale(1.1);
  }
`;
export const ThemmeButtons = styled.button`
  margin: 0;
  margin-top: 5px;
  padding: 5px 10px;
  font: inherit;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: ${(props) =>
      `transform${props.theme.animation} ${props.theme.time}`},
    ${(props) => `box-shadow${props.theme.animation} ${props.theme.time}`};
  &:hover,
  &:focus {
    box-shadow: ${(props) => `0 0 10px${props.theme.colors.white}`};
    transform: scale(1.1);
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`;
