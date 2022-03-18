import styled from "styled-components";
import React from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";
const StyledCommentHeader = styled.h4`
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor2};
  padding: 1rem 0;
  margin-top: 0;
  padding-top: 0;
  font-weight: 400;
`;

const StyledCommentSection = styled.section`
  padding: 2rem;
  background: hsla(0, 0%, 89%, 1);
  border-radius: 0 0 5px 5px;
`;

const CommentSection = ({ articleId }) => {
  return (
    <StyledCommentSection>
      <StyledCommentHeader>Comments (4)</StyledCommentHeader>
      <CommentBox articleId={articleId} />
      <Comment />
    </StyledCommentSection>
  );
};

export default CommentSection;
