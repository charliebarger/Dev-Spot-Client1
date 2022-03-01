import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../utils/NavContext";
import SignInForm from "./SignIn";
import MuteBody from "./MuteBody";
import Terminal from "./Terminal";
import ArticleWrapper from "./ArticleSection";
import SignUpForm from "./SignUp";
const StyledBody = styled.main`
  height: 0px;
  min-height: calc(100vh - 62px);
  margin: auto;
  position: relative;
  background: red;
`;

const StyledWrapper = styled.div`
  background: #ededed;
  padding: 2rem 1rem;
  width: 100%;
  min-height: 100%;
  height: 100%;
`;

const Body = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledBody>
      {/* <MuteBody /> */}
      {/* <Terminal /> */}
      {/* <ArticleWrapper /> */}
      {/* <SignUpForm /> */}
      <StyledWrapper>
        <SignInForm></SignInForm>
      </StyledWrapper>
    </StyledBody>
  );
};

export default Body;
