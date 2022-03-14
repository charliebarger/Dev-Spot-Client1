import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";

const StyledArticleWrapper = styled.section`
  padding: 1.5rem;
`;

const StyledArticleH2 = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
  padding: 1rem 0;
  color: black;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor2};
`;

const ArticlePreviewWrapper = () => {
  const [articles, setArticles] = useState();
  useEffect(() => {
    console.log("here");
    const getPosts = async (e) => {
      try {
        let data = await fetch("http://localhost:4000/api/posts", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await data.json();
        if (data.ok) {
          console.log(response);
        } else {
          throw new Error(response.error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <StyledArticleWrapper>
      <StyledArticleH2>Articles</StyledArticleH2>
      <ArticlePreview />
    </StyledArticleWrapper>
  );
};

export default ArticlePreviewWrapper;
