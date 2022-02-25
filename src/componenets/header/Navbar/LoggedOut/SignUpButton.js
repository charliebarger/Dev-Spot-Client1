import React from "react";
import styled from "styled-components";
import Button from "../../../Button";
const StyledSignUpButton = styled(Button)`
  background: hsl(215, 100%, 50%);
  color: white;
  &:hover {
    background: hsl(215, 100%, 59%);
  }
`;

const SignUpButton = () => {
  return <StyledSignUpButton>Sign Up</StyledSignUpButton>;
};

export default SignUpButton;
