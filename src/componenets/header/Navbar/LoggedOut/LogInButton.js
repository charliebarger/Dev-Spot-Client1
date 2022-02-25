import React from "react";
import styled from "styled-components";
import Button from "../../../Button";
const StyledLogInButton = styled(Button)`
  background: none;
  color: white;
  border: white solid 1px;
  &:hover {
    color: black;
    background: white;
  }
`;

const LogInButton = () => {
  return <StyledLogInButton>Log In</StyledLogInButton>;
};

export default LogInButton;
