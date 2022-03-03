import React from "react";
import styled from "styled-components";
import LogInButton from "./LoggedOut/LogInButton";
import SignUpButton from "./LoggedOut/SignUpButton";
import CreatePostButton from "./LoggedIn/CreatePostButton";
import LogOutButton from "./LoggedIn/LogOutButton";
import StyledRoute from "../../utils/Route";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  align-self: center;

  &:hover {
    transform: scale(0.95);
  }
`;

const StyledUpperNavWrapper = styled.div`
  display: block;
  @media ${({ theme }) => theme.mediaQueries.below850} {
    display: none;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
`;

const UpperNav = () => {
  return (
    <StyledUpperNavWrapper>
      <NavWrapper>
        {/* <StyledLink to={"/signIn"}>
          <LogInButton></LogInButton>
        </StyledLink>
        <StyledLink to={"/signUp"}>
          <SignUpButton></SignUpButton>
        </StyledLink> */}
        <StyledLink to={"/"}>
          <StyledRoute>Home</StyledRoute>
        </StyledLink>
        <CreatePostButton />
        <LogOutButton />
      </NavWrapper>
    </StyledUpperNavWrapper>
  );
};

export default UpperNav;
