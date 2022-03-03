import styled from "styled-components";
import React from "react";
import brainImg from "../../assets/images/brain.jpg";
import CommentSection from "./Comments/CommentWrapper";

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
`;

const ArticleContent = styled.p`
  margin: 2rem 0;
  font-family: ${({ theme }) => theme.fonts.serifPrimary};
  font-size: 1.25rem;
`;

const Article = () => {
  return (
    <StyledArticle>
      <StyledArticleHeader>My First Blog Post</StyledArticleHeader>
      <NameDateWrapper>
        <StyledAuthorName>Charles Barger</StyledAuthorName>
        <span> | </span>
        <StyledDate>01/24/1996</StyledDate>
      </NameDateWrapper>
      <ArticleImg src={brainImg} />
      <section>
        <ArticleContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          adipisci expedita aliquid fugit fugiat, alias odit facere quos at rem
          in cupiditate voluptatem officia aperiam, et, labore nihil corrupti
          sint perferendis? Provident eos molestiae totam! Possimus, officiis
          voluptate? Magnam sequi iste debitis blanditiis. Ad, tempore. Sint et
          nihil molestias alias. Neque magni temporibus sunt odio nisi cum,
          suscipit qui necessitatibus assumenda tenetur adipisci in eius sint
          exercitationem reiciendis mollitia, quod ipsa saepe repellendus ut
          officia. Cumque alias quibusdam, ut ad dolor placeat iusto earum illum
          ipsum tenetur numquam beatae totam iure odit, nam deleniti rem facere!
          Pariatur ipsam doloribus expedita.
        </ArticleContent>
      </section>
      <CommentSection></CommentSection>
    </StyledArticle>
  );
};

export default Article;
