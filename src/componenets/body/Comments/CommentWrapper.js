import styled from "styled-components";
import React, { useEffect, useState, useCallback } from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";
import getComments from "../../../assets/actions/comments/getComments";
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
  const [reset, setReset] = useState(Date.now());
  const renderComments = useCallback(async () => {
    try {
      let data = await getComments(articleId);
      const response = await data.json();
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
    renderComments();
  }, [renderComments, reset]);

  return (
    <StyledCommentSection>
      <StyledCommentHeader>Comments ({comments.length})</StyledCommentHeader>
      <CommentBox articleId={articleId} getComments={renderComments} />
      {comments.map((commentData) => {
        return (
          <Comment
            body={commentData.comment}
            name={commentData.user.firstName + " " + commentData.user.lastName}
            commentAuthor={commentData.user._id}
            commentId={commentData._id}
            date={commentData.date}
            key={commentData._id}
            reset={setReset}
          />
        );
      })}
    </StyledCommentSection>
  );
};

export default CommentSection;
