import styled from "styled-components";
import React from "react";

const StyledSignUpHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 8px;
`;

const FormHeader = ({ children }) => {
  return <StyledSignUpHeader>{children}</StyledSignUpHeader>;
};

export default FormHeader;
