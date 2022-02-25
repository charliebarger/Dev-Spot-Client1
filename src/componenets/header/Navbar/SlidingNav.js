import React, { useContext } from "react";
import styled, { css } from "styled-components";
import LogInButton from "./LoggedOut/LogInButton";
import SignUpButton from "./LoggedOut/SignUpButton";
import { NavContext } from "../utils/NavContext";

const StyledSlidingNav = styled.nav`
  padding: 2rem;
  gap: 1rem;
  border-radius: 0px 0px 165px 0px;
  bottom: 0;
  min-height: calc(100vh - 57px);
  display: flex;
  flex-direction: column;
  align-items: center;
  left: -200px;
  top: 62px;
  position: absolute;
  background: black;
  color: white;
  min-height: calc(100vh - 200px);
  transition: all 0.5s;
  opacity: 0.9;
  z-index: 100;
  ${({ closed }) =>
    closed &&
    css`
      left: 0;
    `}
`;

const SlidingNav = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledSlidingNav closed={closed}>
      <LogInButton></LogInButton>
      <SignUpButton></SignUpButton>
    </StyledSlidingNav>
  );
};

export default SlidingNav;
