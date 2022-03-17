import styled, { css } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
const StyledArticleLink = styled(Link)`
  display: block;
  max-width: 765px;
  margin: auto;
  color: black;
  transition: 0.5s;
  &:hover {
    background: hsla(0, 0%, 89%, 1);
  }
`;

const StyledArticle = styled.article`
  padding: 1rem;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor2};
  display: flex;
  gap: 2rem;

  ${({ index }) =>
    index == 0 &&
    css`
      border-top: 1px solid ${({ theme }) => theme.colors.fontColor2};
    `}
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
  text-transform: capitalize;
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

const ArticlePreview = (props) => {
  console.log(props.index);
  return (
    <StyledArticleLink className="exactly" to={`/article/${props.id}`}>
      <StyledArticle index={props.index}>
        <StyledArticleInfo>
          <StyledTopWrapper>
            <StyledAuthorName>{props.author}</StyledAuthorName>
            <span>|</span>
            <StyledDate>{props.date}</StyledDate>
          </StyledTopWrapper>
          <StyledArticleHeader>{props.title}</StyledArticleHeader>
          <StyledArticleBody>{props.body}</StyledArticleBody>
        </StyledArticleInfo>
        <StyledImageWrapperSection>
          <StyledImageWrapper>
            <StyledImage src={props.imageUrl}></StyledImage>
          </StyledImageWrapper>
        </StyledImageWrapperSection>
      </StyledArticle>
    </StyledArticleLink>
  );
};

export default ArticlePreview;
