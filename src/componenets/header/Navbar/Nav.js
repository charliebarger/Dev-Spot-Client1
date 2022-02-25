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
  const [closed, setClosed] = useState(false);

  return (
    <NavWrapper>
      {/* <LogInButton></LogInButton>
      <SignUpButton></SignUpButton> */}
      <Hamburger closed={closed} setClosed={setClosed} />
      <SlidingNav closed={closed}></SlidingNav>
    </NavWrapper>
  );
};

export default Nav;
