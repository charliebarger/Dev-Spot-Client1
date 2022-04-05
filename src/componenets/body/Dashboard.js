import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Rings } from "react-loader-spinner";
import DashboardArticlePreview from "./DashboardArticlePreview";
import getMyDrafts from "../../assets/actions/drafts/getDraftsbyUser";
import getMyPosts from "../../assets/actions/posts/getPostsbyUser";
import getUserInfo from "../../assets/actions/user/getUserInfo";
const StyledHeader = styled.h1`
  text-transform: capitalize;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 400;
  margin-top: 0;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    font-size: 1.75rem;
  }
`;

const StyledSubHeader = styled.h2`
  font-weight: 300;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColor2};
  @media ${({ theme }) => theme.mediaQueries.below700} {
    font-size: 1.25rem;
  }
`;

const StyledImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StyledMessage = styled.span`
  margin: 1rem;
  font-size: 1.25rem;
  font-weight: 400;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    font-size: 1rem;
  }
`;

const StyledMargin = styled.div`
  padding: 1rem;
  display: flex;
  overflow-y: scroll;
  gap: 1.5rem;
  flex-wrap: no-wrap;
  margin: 2rem 0.5rem;
`;

const StyledWrapper = styled.div`
  height: 150px;
  width: 150px;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    height: 125px;
    width: 125px;
  }
`;

const Dashboard = () => {
  const [drafts, setDrafts] = useState([]);
  console.log(drafts);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [requestData, setRequestData] = useState(new Date());

  useEffect(() => {
    Promise.all([getMyDrafts(), getMyPosts(), getUserInfo()])
      .then((res) => {
        setDrafts(res[0]);
        setPosts(res[1]);
        setUser(res[2]);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }, [requestData]);

  return (
    <section>
      <StyledHeader>
        {user ? user.firstName + " " + user.lastName : ""} Dashboard
      </StyledHeader>
      <section>
        <StyledSubHeader>Published Posts</StyledSubHeader>
        <StyledMargin>
          {posts.length > 0 ? (
            posts.map((post) => {
              return (
                <DashboardArticlePreview
                  post
                  setPosts={setRequestData}
                  articleId={post.id}
                  image={post.imageUrl}
                  title={post.title}
                  shortDate={post.shortDate}
                  key={post.id}
                />
              );
            })
          ) : (
            <StyledImageSection>
              <StyledWrapper>
                <Rings
                  height="100%"
                  width="100%"
                  ariaLabel="loading"
                  color="rgba(117, 117, 117, 1)"
                />
              </StyledWrapper>
              <StyledMessage>No Published Posts</StyledMessage>
            </StyledImageSection>
          )}
        </StyledMargin>
      </section>
      <section>
        <StyledSubHeader>Unpublished Posts</StyledSubHeader>
        <StyledMargin>
          {drafts.length > 0 ? (
            drafts.map((draft) => {
              return (
                <DashboardArticlePreview
                  setPosts={setRequestData}
                  articleId={draft.id}
                  image={draft.imageUrl}
                  title={draft.title}
                  shortDate={draft.shortDate}
                  key={draft.id}
                />
              );
            })
          ) : (
            <StyledImageSection>
              <StyledWrapper>
                <Rings
                  height="100%"
                  width="100%"
                  ariaLabel="loading"
                  color="hsla(215,100%,50%, 1)"
                />
              </StyledWrapper>
              <StyledMessage>No Published Posts</StyledMessage>
            </StyledImageSection>
          )}
        </StyledMargin>
      </section>
    </section>
  );
};

export default Dashboard;
