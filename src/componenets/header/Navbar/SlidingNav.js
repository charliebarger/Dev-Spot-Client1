import React, { useContext } from "react";
import styled, { css } from "styled-components";
import StyledRoute from "../../utils/Route";
import { Link } from "react-router-dom";
import LogOutButton from "./LoggedIn/LogOutButton";
import CreatePostButton from "./LoggedIn/CreatePostButton";
import LogInButton from "./LoggedOut/LogInButton";
import SignUpButton from "./LoggedOut/SignUpButton";
import { NavContext } from "../../utils/NavContext";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledSlidingNav = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaQueries.below850} {
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
    z-index: 100;
    ${({ loggedIn }) =>
      loggedIn &&
      css`
        align-items: start;
      `}
    ${({ closed }) =>
      closed &&
      css`
        left: 0;
      `}
  }
`;

const StyledSliderRoute = styled(StyledRoute)`
  align-self: start;
  padding: 0.5rem 0;
  margin: 0;
  color: white;
`;

const SlidingNav = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledSlidingNav closed={closed} loggedIn onClick={() => setClosed(false)}>
      {/* <LogInButton></LogInButton>
      <SignUpButton></SignUpButton> */}
      <StyledLink to={"/"}>
        <StyledSliderRoute>Home</StyledSliderRoute>
      </StyledLink>
      <Link to={"/signIn"}>
        <CreatePostButton />
      </Link>
      <CreatePostButton />
      <LogOutButton />
    </StyledSlidingNav>
  );
};

export default SlidingNav;
