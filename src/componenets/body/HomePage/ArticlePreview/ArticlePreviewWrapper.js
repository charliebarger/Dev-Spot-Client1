import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import { type } from "@testing-library/user-event/dist/type";
import { stripHtml } from "string-strip-html";

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
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const createBodyPreview = (articles) => {
      articles.forEach((article) => {
        const strippedPtag = /<p>(.*?)<\/p>/g.exec(article.body);
        const articlePreview = strippedPtag
          ? stripHtml(strippedPtag[1]).result.substring(0, 140) + "..."
          : "No Preview Available...";
        article.body = articlePreview;
      });
    };

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
          createBodyPreview(response);
          setArticles(response);
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
      {articles.map((article) => {
        return (
          <ArticlePreview
            title={article.title}
            author={article.user.firstName + " " + article.user.lastName}
            date={article.date}
            body={article.body}
          ></ArticlePreview>
        );
      })}
    </StyledArticleWrapper>
  );
};

export default ArticlePreviewWrapper;
