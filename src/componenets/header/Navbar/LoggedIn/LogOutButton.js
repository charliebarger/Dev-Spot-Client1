import React from "react";
import styled from "styled-components";
import Button from "../../../Button";
const StyledLogOutButton = styled(Button)`
  margin: 0.25rem 0;
  background: none;
  color: #ffc107;
  border: #ffc107 solid 1px;
  &:hover {
    color: black;
    background: #ffc107;
  }
`;

const LogOutButton = () => {
  return <StyledLogOutButton>Log Out</StyledLogOutButton>;
};

export default LogOutButton;
