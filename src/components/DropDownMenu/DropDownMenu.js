import React, { useState } from "react";
import { Dropdown, ThemmeButton, ThemmeButtons } from "./DropDownMenu.styled";
import { useTheme } from "../../context/theme";
import water from "../../images/water.png";
import office from "../../images/office.jpg";
import leaves from "../../images/leaves.png";

export function DropDown() {
  const [visible, setVisible] = useState(false);

  const { updateTheme, resetTheme } = useTheme();

  const toggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <Dropdown>
      <ThemmeButton type="button" className="Dropdown__toggle" onClick={toggle}>
        {visible ? "Hide" : "Chooze your theme"}
      </ThemmeButton>

      {visible && (
        <div className="Dropdown__menu">
          <ThemmeButtons
            onClick={() => {
              updateTheme({
                colors: { BackgroundColor: "rgb(119, 136, 153)" },
                src: water,
                BackgroundRepeat: "repeat",
                BackgroundSize: "auto",
              });
            }}
          >
            Blue
          </ThemmeButtons>
          <ThemmeButtons
            onClick={() => {
              updateTheme({
                src: office,
                BackgroundRepeat: "no-repeat",
                BackgroundSize: "cover",
              });
            }}
          >
            Dark
          </ThemmeButtons>
          <ThemmeButtons
            onClick={() => {
              updateTheme({
                colors: { BackgroundColor: "rgb(34, 139, 34)" },
                src: leaves,
                BackgroundRepeat: "no-repeat",
                BackgroundSize: "cover",
              });
            }}
          >
            Green
          </ThemmeButtons>
          <ThemmeButtons onClick={resetTheme}>Default</ThemmeButtons>
        </div>
      )}
    </Dropdown>
  );
}
