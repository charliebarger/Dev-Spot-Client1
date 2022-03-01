import styled, { css } from "styled-components";
import React from "react";

const StyledRequiredField = styled.span`
  &:before {
    content: "*";
    color: red;
  }
`;

const RequiredFields = () => {
  return <StyledRequiredField>Required Field</StyledRequiredField>;
};

export default RequiredFields;
