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
    index === 0 &&
    css`
      border-top: 1px solid ${({ theme }) => theme.colors.fontColor2};
    `}
  @media ${({ theme }) => theme.mediaQueries.below425} {
    gap: 1rem;
  }
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
  @media ${({ theme }) => theme.mediaQueries.below425} {
    width: 60px;
    height: 60px;
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
const StyledDate = styled.time`
  display: block;
  @media ${({ theme }) => theme.mediaQueries.below425} {
    display: none;
  }
`;

const StyledArticleHeader = styled.h3`
  font-weight: 500;
  margin-bottom: 0;
  text-transform: capitalize;
`;

const StyledArticleBody = styled.p`
  display: block;
  font-family: ${({ theme }) => theme.fonts.serifPrimary};
  margin-top: 0.5rem;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: none;
  @media ${({ theme }) => theme.mediaQueries.below425} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 190px;
  }
`;

const ArticlePreview = (props) => {
  console.log(props.index);
  return (
    <StyledArticleLink className="exactly" to={`/article/${props.id}`}>
      <StyledArticle index={props.index}>
        <StyledArticleInfo>
          <StyledTopWrapper>
            <StyledAuthorName>{props.author}</StyledAuthorName>
            <StyledDate>| {props.date}</StyledDate>
          </StyledTopWrapper>
          <StyledArticleHeader>{props.title}</StyledArticleHeader>
          <StyledArticleBody>{props.body}</StyledArticleBody>
        </StyledArticleInfo>
        <StyledImageWrapperSection>
          <StyledImageWrapper>
            <StyledImage
              src={props.imageUrl}
              alt={"Article Thumbnail"}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://static.vecteezy.com/system/resources/previews/002/811/419/original/404-error-programming-vector.jpg";
                currentTarget.alt = "image not found";
              }}
            ></StyledImage>
          </StyledImageWrapper>
        </StyledImageWrapperSection>
      </StyledArticle>
    </StyledArticleLink>
  );
};

export default ArticlePreview;
