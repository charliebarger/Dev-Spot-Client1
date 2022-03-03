import React from "react";
import styled from "styled-components";
import UpperNav from "./UpperNav";
import Hamburger from "./Hamburger";
import SlidingNav from "./SlidingNav";

const NavWrapper = styled.nav`
  margin-left: auto;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <UpperNav />
      <Hamburger />
      <SlidingNav></SlidingNav>
    </NavWrapper>
  );
};

export default Nav;
