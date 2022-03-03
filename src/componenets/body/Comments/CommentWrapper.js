import styled from "styled-components";
import React from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";
const StyledCommentHeader = styled.h4`
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor2};
  padding: 1rem 0;
  font-weight: 400;
`;

const CommentSection = () => {
  return (
    <section>
      <StyledCommentHeader>Comments (4)</StyledCommentHeader>
      <CommentBox />
      <Comment />
    </section>
  );
};

export default CommentSection;
