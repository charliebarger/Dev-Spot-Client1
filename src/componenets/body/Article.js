import styled from "styled-components";
import React, { useEffect, useState } from "react";
import CommentSection from "./Comments/CommentWrapper";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import getPostbybyId from "../../assets/actions/posts/getPostbybyId";
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
  let articleId = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const articleInfo = await getPostbybyId(articleId);
        setArticle(articleInfo.post);
        setIsLoaded(true);
      } catch (error) {
        navigate("/Dev-Spot-Client1/404error");
        console.log(error);
      }
    })();
  }, [articleId, navigate]);

  if (!isLoaded) {
    return <div></div>;
  } else {
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
          {article.imageUrl && (
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
          )}
          <section>
            <ArticleContent>{parse(article.body)}</ArticleContent>
          </section>
        </StyledPaddingWrapper>
        <CommentSection articleId={articleId}></CommentSection>
      </StyledArticle>
    );
  }
};
export default Article;
