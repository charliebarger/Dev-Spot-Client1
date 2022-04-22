import React, { useContext } from "react";
import styled from "styled-components";
import LogInButton from "./LoggedOut/LogInButton";
import SignUpButton from "./LoggedOut/SignUpButton";
import CreatePostButton from "./LoggedIn/CreatePostButton";
import LogOutButton from "./LoggedIn/LogOutButton";
import StyledRoute from "../../utils/Route";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
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
  const { loggedIn } = useContext(UserContext);
  return (
    <StyledUpperNavWrapper>
      <NavWrapper>
        {loggedIn ? (
          <>
            <StyledLink to={"/dev-spot-client/"}>
              <StyledRoute>Home</StyledRoute>
            </StyledLink>
            <StyledLink to={"/dev-spot-client/dashboard"}>
              <StyledRoute>Dashboard</StyledRoute>
            </StyledLink>
            <StyledLink to={"/dev-spot-client/createArticle"}>
              <CreatePostButton />
            </StyledLink>
            <LogOutButton />
          </>
        ) : (
          <>
            <StyledLink to={"/dev-spot-client/signIn"}>
              <LogInButton></LogInButton>
            </StyledLink>
            <StyledLink to={"/dev-spot-client/signUp"}>
              <SignUpButton></SignUpButton>
            </StyledLink>
          </>
        )}
      </NavWrapper>
    </StyledUpperNavWrapper>
  );
};

export default UpperNav;
