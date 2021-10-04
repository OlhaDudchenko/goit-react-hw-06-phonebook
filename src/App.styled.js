import styled from "@emotion/styled";

export const AppWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: "Dancing Script", cursive;
  background-image: url("${(props) => props.theme.src}");
  background-repeat: ${(props) => props.theme.BackgroundRepeat};
  background-position: ${(props) => props.theme.BackgroundPosition};
  background-size: ${(props) => props.theme.BackgroundSize};
  background-color: ${(props) => props.theme.colors.BackgroundColor};
`;
