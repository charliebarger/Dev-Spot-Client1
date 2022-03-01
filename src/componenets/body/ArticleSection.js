import styled from "styled-components";
import React from "react";
import Article from "./Article";

const StyledArticleWrapper = styled.section`
  padding: 1.5rem;
  max-width: 765px;
  margin: auto;
`;

const StyledArticleH2 = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor2};
`;

const ArticleWrapper = () => {
  return (
    <StyledArticleWrapper>
      <StyledArticleH2>Articles</StyledArticleH2>
      <Article />
    </StyledArticleWrapper>
  );
};

export default ArticleWrapper;
