import styled from "styled-components";
import React, { useEffect, useState } from "react";
import getUserInfo from "../../../assets/actions/user/getUserInfo";
const StyledTopWrapper = styled.div`
  display: flex;
  align-items: center;
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

const StyledTrashCan = styled.div`
  margin-left: auto;
  padding: 8px;
  border-radius: 1000px;
  transition: 0.5s;
  display: flex;
  cursor: pointer;
  &:hover {
    background: #a9a9a933;
  }
`;

const Comment = ({ body, name, date, commentAuthor, commentId, reset }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    (async () => {
      const userData = await getUserInfo();
      userData ? setUser(userData) : setUser(false);
    })();
  }, [setUser]);

  const deleteComment = async () => {
    try {
      console.log(commentId);
      let data = await fetch(
        `http://localhost:4000/api/posts/comments/${commentId}/delete`,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem(`token`),
          },
        }
      );
      const response = await data.json();
      if (data.error) {
        throw new Error(response.error);
      } else {
        reset(Date.now());
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user._id, commentAuthor);
  return (
    <CommentWrapper>
      <StyledTopWrapper>
        <StyledAuthorName>{name}</StyledAuthorName>
        <span>|</span>
        <StyledDate>{date}</StyledDate>
        {user._id === commentAuthor && (
          <StyledTrashCan onClick={deleteComment}>
            <img
              alt="trash can"
              src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"
            />
          </StyledTrashCan>
        )}
      </StyledTopWrapper>
      <StyledComment>{body}</StyledComment>
    </CommentWrapper>
  );
};

export default Comment;
