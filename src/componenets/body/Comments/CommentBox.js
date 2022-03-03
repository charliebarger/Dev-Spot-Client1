import styled from "styled-components";
import React from "react";
import Button from "../../utils/Button";

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

const CommentBox = () => {
  return (
    <form>
      <StyledTextArea></StyledTextArea>
      <SubmitButton>Comment</SubmitButton>
    </form>
  );
};

export default CommentBox;
