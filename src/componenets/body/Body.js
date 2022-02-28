import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../utils/NavContext";
import MuteBody from "./MuteBody";
import Terminal from "./Terminal";
import ArticleWrapper from "./ArticleSection";
const StyledBody = styled.main`
  min-height: calc(100vh - 62px);
  padding: 0 1rem;
  position: relative;
  * {
    cursor: pointer;
  }
`;

const Body = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledBody>
      <MuteBody />
      <Terminal />
      <ArticleWrapper />
    </StyledBody>
  );
};

export default Body;
