import React from "react";
import styled from "styled-components";
import LogInButton from "./LoggedOut/LogInButton";
import SignUpButton from "./LoggedOut/SignUpButton";
import CreatePostButton from "./LoggedIn/CreatePostButton";
import LogOutButton from "./LoggedIn/LogOutButton";
import StyledRoute from "../../utils/Route";
const StyledUpperNavWrapper = styled.div`
  display: block;
  @media ${({ theme }) => theme.mediaQueries.below850} {
    display: none;
  }
`;

const LoggedInWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
`;

const UpperNav = () => {
  return (
    <StyledUpperNavWrapper>
      {/* <NotLoggedInWrapper>
        <SignUpButton />
        <LogInButton />
      </NotLoggedInWrapper> */}
      <LoggedInWrapper>
        <StyledRoute>Home</StyledRoute>
        <CreatePostButton />
        <LogOutButton />
      </LoggedInWrapper>
    </StyledUpperNavWrapper>
  );
};

export default UpperNav;
