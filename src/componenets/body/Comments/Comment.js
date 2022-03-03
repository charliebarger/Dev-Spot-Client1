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

const Comment = () => {
  return (
    <CommentWrapper>
      <StyledTopWrapper>
        <StyledAuthorName>Charles Barger</StyledAuthorName>
        <span>|</span>
        <StyledDate>01/24/1996</StyledDate>
      </StyledTopWrapper>
      <StyledComment>This Article Sucks!!</StyledComment>
    </CommentWrapper>
  );
};

export default Comment;
