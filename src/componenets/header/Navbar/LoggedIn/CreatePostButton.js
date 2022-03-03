import React from "react";
import styled from "styled-components";
import Button from "../../../utils/Button";
const StyledCreatePostButton = styled(Button)`
  margin: 0.25rem 0;
  background: hsl(215, 100%, 50%);
  color: white;
  text-transform: capitalize;
  &:hover {
    background: hsl(215, 100%, 59%);
  }
`;

const CreatePostButton = () => {
  return <StyledCreatePostButton>Create Post</StyledCreatePostButton>;
};

export default CreatePostButton;
