import styled from "styled-components";
import React, { useEffect, useState } from "react";
import brainImg from "../../assets/images/brain.jpg";
import CommentSection from "./Comments/CommentWrapper";
import { useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import parse from "html-react-parser";
const StyledArticle = styled.article`
  max-width: 650px;
  margin: auto;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px grey;
`;

const StyledArticleHeader = styled.h1`
  margin: 0px;
  text-align: center;
  font-weight: 400;
`;

const StyledAuthorName = styled.address`
  font-style: normal;
  text-transform: capitalize;
  color: black;
`;
const StyledDate = styled.time``;

const NameDateWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.fontColor2};
`;

const ArticleImg = styled.img`
  max-width: 100%;
  height: auto;
  background: none;
  display: block;
  margin: auto;
`;

const ArticleContent = styled.div`
  margin: 2rem 0;
  font-family: ${({ theme }) => theme.fonts.serifPrimary};
  font-size: 1.25rem;
`;

const Article = () => {
  const [article, setArticle] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  let params = useParams();
  useEffect(() => {
    console.log("started use effect");
    const getPost = async () => {
      console.log("started get post");
      try {
        let data = await fetch(`http://localhost:4000/api/posts/${params.id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await data.json();
        if (data.ok) {
          console.log("above set article");
          console.log(response.post);
          setArticle(response.post);
          console.log("above loaded");
          setIsLoaded(true);
        } else {
          // should navigate to error page
          throw new Error(response.error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [params]);
  console.log("render");
  if (!isLoaded) {
    return (
      // <BallTriangle height="100" width="100" color="grey" ariaLabel="loading" />
      <div></div>
    );
  } else {
    console.log(parse(article.body));
    return (
      <StyledArticle>
        <StyledArticleHeader></StyledArticleHeader>
        <NameDateWrapper>
          <StyledAuthorName>
            {article.user.firstName + " " + article.user.lastName}
          </StyledAuthorName>
          <span> • </span>
          <StyledDate>{article.date}</StyledDate>
        </NameDateWrapper>
        <ArticleImg src={article.imageUrl} />
        <section>
          <ArticleContent>{parse(article.body)}</ArticleContent>
        </section>
        <CommentSection></CommentSection>
      </StyledArticle>
    );
  }
};
export default Article;
