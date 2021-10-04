import PropTypes from "prop-types";
import { SectionWrapper, SectionTitle } from "./Section.styled";

export function Section({ title, children }) {
  return (
    <SectionWrapper>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
