import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Navbar/Nav";
const StyledHeader = styled.header`
  padding: 1rem 2rem;
  background: black;
  display: flex;
  align-items: center;
  * {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo></Logo>
      <Nav></Nav>
    </StyledHeader>
  );
};

export default Header;
