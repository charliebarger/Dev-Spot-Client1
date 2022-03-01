import styled from "styled-components";
import React from "react";
import brainImg from "../../assets/images/brain.jpg";

const StyledArticleLink = styled.a``;

const StyledArticle = styled.article`
  padding: 1rem 0;
  margin: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor2};
  display: flex;
  gap: 2rem;
`;

const StyledArticleInfo = styled.section`
  flex: 3;
`;
const StyledImageWrapperSection = styled.div`
  flex: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  @media ${({ theme }) => theme.mediaQueries.below550} {
    width: 80px;
    height: 80px;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const StyledTopWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  font-size: 0.95rem;
  font-style: normal;
  color: ${({ theme }) => theme.colors.fontColor2};
`;
const StyledAuthorName = styled.address`
  font-style: normal;
  color: ${({ theme }) => theme.colors.primary};
`;
const StyledDate = styled.time``;

const StyledArticleHeader = styled.h3`
  font-weight: 500;
  margin-bottom: 0;
`;

const StyledArticleBody = styled.p`
  display: block;
  font-family: ${({ theme }) => theme.fonts.serifPrimary};
  margin-top: 0.5rem;
`;

const Article = () => {
  return (
    <StyledArticleLink>
      <StyledArticle>
        <StyledArticleInfo>
          <StyledTopWrapper>
            <StyledAuthorName>Charles Barger</StyledAuthorName>
            <span>|</span>
            <StyledDate>01/24/1996</StyledDate>
          </StyledTopWrapper>
          <StyledArticleHeader>My First Blog Post</StyledArticleHeader>
          <StyledArticleBody>
            If you’re like me — a tech savvy individual (that also happens to be
            a software engineer) or just a casual technology user, then..
          </StyledArticleBody>
        </StyledArticleInfo>
        <StyledImageWrapperSection>
          <StyledImageWrapper>
            <StyledImage src={brainImg}></StyledImage>
          </StyledImageWrapper>
        </StyledImageWrapperSection>
      </StyledArticle>
    </StyledArticleLink>
  );
};

export default Article;
