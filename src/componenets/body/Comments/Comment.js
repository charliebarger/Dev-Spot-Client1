import styled from "styled-components";
import React from "react";

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
  text-transform: capitalize;
`;
const StyledDate = styled.time``;

const CommentWrapper = styled.div`
  margin: 1.25rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid black;
`;

const StyledComment = styled.p`
  font-size: 1rem;
`;

const Comment = ({ body, name, date }) => {
  return (
    <CommentWrapper>
      <StyledTopWrapper>
        <StyledAuthorName>{name}</StyledAuthorName>
        <span>|</span>
        <StyledDate>{date}</StyledDate>
      </StyledTopWrapper>
      <StyledComment>{body}</StyledComment>
    </CommentWrapper>
  );
};

export default Comment;
