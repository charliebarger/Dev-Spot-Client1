import styled from "styled-components";
import React, { useEffect, useState, useCallback } from "react";
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
  const [comments, setComments] = useState([]);

  const getComments = useCallback(async () => {
    try {
      let data = await fetch(
        `http://localhost:4000/api/posts/${articleId}/comments`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        },
        []
      );
      const response = await data.json();
      console.log(response);
      if (data.ok) {
        setComments(response);
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  }, [articleId]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <StyledCommentSection>
      <StyledCommentHeader>Comments ({comments.length})</StyledCommentHeader>
      <CommentBox articleId={articleId} getComments={getComments} />
      {comments.map((commentData) => {
        return (
          <Comment
            body={commentData.comment}
            name={commentData.user.firstName + " " + commentData.user.lastName}
            date={commentData.date}
            key={commentData._id}
          />
        );
      })}
    </StyledCommentSection>
  );
};

export default CommentSection;
