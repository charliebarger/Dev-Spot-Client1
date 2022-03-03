import styled from "styled-components";
import React from "react";
import ArticlePreview from "./ArticlePreview";

const StyledArticleWrapper = styled.section`
  padding: 1.5rem;
`;

const StyledArticleH2 = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor2};
`;

const ArticlePreviewWrapper = () => {
  return (
    <StyledArticleWrapper>
      <StyledArticleH2>Articles</StyledArticleH2>
      <ArticlePreview />
    </StyledArticleWrapper>
  );
};

export default ArticlePreviewWrapper;
