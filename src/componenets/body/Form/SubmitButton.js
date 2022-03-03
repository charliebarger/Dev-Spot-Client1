import styled from "styled-components";
import React from "react";
import Button from "../../utils/Button";

const StyledSubmitButton = styled(Button)`
  background: ${({ theme }) => theme.colors.logoColor};
  color: white;

  &:hover {
    background: #0055cc;
  }
`;

const SubmitButton = () => {
  return <StyledSubmitButton>Submit</StyledSubmitButton>;
};

export default SubmitButton;
