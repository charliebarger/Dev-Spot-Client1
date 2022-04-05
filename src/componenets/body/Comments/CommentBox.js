import styled from "styled-components";
import React, { useState } from "react";
import Button from "../../utils/Button";
import createComment from "../../../assets/actions/comments/createComment";
const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  height: 85px;
`;

const SubmitButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  margin: 1rem 0;
  border: 1px solid white;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background: white;
  }
`;

const CommentBox = ({ articleId, getComments }) => {
  const [comment, setComment] = useState("");

  const submitComment = async (e) => {
    e.preventDefault();
    setComment("");
    const data = await createComment(comment, articleId);
    if (data.ok) {
      getComments();
    }
  };

  return (
    <form onSubmit={submitComment}>
      <StyledTextArea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <SubmitButton>Comment</SubmitButton>
    </form>
  );
};

export default CommentBox;
