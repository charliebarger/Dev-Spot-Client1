import styled, { css } from "styled-components";
import React from "react";

const StyledInputLabel = styled.label`
  margin-bottom: 0.5rem;
  display: inline-block;
  text-transform: capitalize;
  font-size: 1rem;

  ${({ required }) =>
    required &&
    css`
      &:after {
        content: "*";
        color: red;
      }
    `}
`;

const FormLabel = ({ children, labelFor, required }) => {
  return (
    <StyledInputLabel for={labelFor} required={required}>
      {children}
    </StyledInputLabel>
  );
};

export default FormLabel;
