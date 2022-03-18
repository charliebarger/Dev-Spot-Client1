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
  border-radius: 5px;
  box-shadow: 3px 3px 10px grey;
  background: white;
`;

const StyledArticleHeader = styled.h1`
  margin: 0px;
  text-align: center;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 2.5rem;
`;

const StyledAuthorName = styled.address`
  font-style: normal;
  text-transform: capitalize;
  color: black;
`;
const StyledDate = styled.time`
  font-size: 0.75rem;
`;

const NameDateWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.fontColor2};
  flex-direction: column;
  margin-top: 0.5rem;
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
`;

const StyledPaddingWrapper = styled.div`
  padding: 2rem;
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
        <StyledPaddingWrapper>
          <StyledArticleHeader>{article.title}</StyledArticleHeader>
          <NameDateWrapper>
            <StyledAuthorName>
              {article.user.firstName + " " + article.user.lastName}
            </StyledAuthorName>
            <StyledDate>{article.date}</StyledDate>
          </NameDateWrapper>
          <ArticleImg
            src={article.imageUrl}
            alt={"Article Thumbnail"}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; //
              currentTarget.src =
                "https://static.vecteezy.com/system/resources/previews/002/811/419/original/404-error-programming-vector.jpg";
              currentTarget.alt = "image not found";
            }}
          />
          <section>
            <ArticleContent>{parse(article.body)}</ArticleContent>
          </section>
        </StyledPaddingWrapper>
        <CommentSection></CommentSection>
      </StyledArticle>
    );
  }
};
export default Article;
