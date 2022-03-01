import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../utils/NavContext";
import MuteBody from "./MuteBody";
import Terminal from "./Terminal";
import ArticleWrapper from "./ArticleSection";
import SignUpForm from "./SignUp";
const StyledBody = styled.main`
  min-height: calc(100vh - 62px);
  margin: auto;
  position: relative;
`;

const Body = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledBody>
      {/* <MuteBody /> */}
      {/* <Terminal /> */}
      {/* <ArticleWrapper /> */}
      <SignUpForm />
    </StyledBody>
  );
};

export default Body;
