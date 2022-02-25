import React, { useState } from "react";
import styled from "styled-components";
import LogInButton from "./LoggedOut/LogInButton";
import SignUpButton from "./LoggedOut/SignUpButton";
import Hamburger from "./Hamburger";
import SlidingNav from "./SlidingNav";

const NavWrapper = styled.nav`
  display: flex;
  gap: 1rem;

  margin-left: auto;
`;

const Nav = () => {
  return (
    <NavWrapper>
      {/* <LogInButton></LogInButton>
      <SignUpButton></SignUpButton> */}
      <Hamburger />
      <SlidingNav></SlidingNav>
    </NavWrapper>
  );
};

export default Nav;
