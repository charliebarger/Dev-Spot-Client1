import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import { type } from "@testing-library/user-event/dist/type";
import { stripHtml } from "string-strip-html";
import { RotatingLines } from "react-loader-spinner";

const StyledArticleWrapper = styled.section`
  padding: 1.5rem;
`;

const StyledArticleH2 = styled.h2`
  font-size: 2.5rem;
  margin: 2.5rem 0;
  padding: 1rem 0;
  color: black;
  border-bottom: 3px solid black;
`;

const ArticlePreviewWrapper = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const createBodyPreview = (articles) => {
      articles.forEach((article) => {
        const pTags = article.body.match(/<p>(.*?)<\/p>/g);

        let longestPTag = pTags
          ? pTags.reduce((a, b) => {
              return a.length > b.length ? a : b;
            })
          : "No Preview Available...";

        article.body = stripHtml(longestPTag).result.substring(0, 140) + "...";
      });
    };

    const getPosts = async (e) => {
      try {
        let data = await fetch(
          "https://gentle-wildwood-95976.herokuapp.com/api/posts",
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
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
      {articles.length > 0 ? (
        articles.map((article, index) => {
          return (
            <ArticlePreview
              key={article._id}
              id={article._id}
              title={article.title}
              author={article.user.firstName + " " + article.user.lastName}
              date={article.shortDate}
              body={article.body}
              imageUrl={article.imageUrl}
              index={index}
            ></ArticlePreview>
          );
        })
      ) : (
        <div style={{ textAlign: "center" }}>
          <RotatingLines width="100" strokeColor="hsl(215,100%,50%)" />
        </div>
      )}
    </StyledArticleWrapper>
  );
};

export default ArticlePreviewWrapper;
