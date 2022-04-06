import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../../utils/Button";
import { UserContext } from "../../../utils/UserContext";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserContext);
  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/Dev-Spot-Client1/");
  };

  return <StyledLogOutButton onClick={logOut}>Log Out</StyledLogOutButton>;
};

export default LogOutButton;
