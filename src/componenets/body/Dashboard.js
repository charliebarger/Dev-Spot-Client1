import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Rings } from "react-loader-spinner";
import Button from "../utils/Button";
import DashboardArticlePreview from "./DashboardArticlePreview";
import getMyDrafts from "../../assets/actions/drafts/getDraftsbyUser";
import getMyPosts from "../../assets/actions/posts/getPostsbyUser";
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

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 250px;
  background: white;
  box-shadow: 10px 5px 10px grey;
  border-radius: 5px;
  border: black solid 2px;
  position: relative;

  &:hover {
    > div:first-child {
      transition: 0.5s all ease-in-out;
      background: hsla(0, 0%, 0%, 0.8);
    }
    > div:first-child button {
      transition: 0.5s opacity ease-in-out;
      opacity: 1;
    }
  }
`;

const StyledShadow = styled.div`
  background: hsla(0, 0%, 50%, 0);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2.5px;
  //   display: flex;
  //   flex-direction: column;
  //   gap: 32px;
  //   justify-content: center;
  //   align-items: center;
`;

const StyledEditButton = styled(Button)`
  transition: 0.5s all ease-in-out;
  background: hsl(215, 100%, 50%);
  color: white;
  opacity: 0;
  font-size: 1.25rem;
  transition: 0.5s transform ease-in-out;
  &:hover {
    background: hsl(215, 100%, 59%);
    transform: translateY(-3px);
  }
`;

const StyledDeleteButton = styled(Button)`
  background: hsl(0, 100%, 50%);
  color: white;
  opacity: 0;
  font-size: 1.25rem;
  transition: 0.5s transform ease-in-out;
  &:hover {
    background: hsl(0, 100%, 59%);
    transform: translateY(-3px);
  }
`;

const StyledTopDivWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledImgWrapper = styled.div`
  flex: 1;
  width: 100%;
  background: url(https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png)
    no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledArticleHeader = styled.h4`
  text-align: center;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  font-weight: 400;
  margin: 0;
  padding: 0.75rem;
  border-bottom: 1px solid black;
`;

const StyledSpan = styled.span`
  display: block;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0.75rem;
`;

const StyledFooter = styled.footer`
  background: black;
`;

const StyledButtonWrapper = styled.div`
  width: max-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  height: 100%;
`;

const Dashboard = () => {
  const [drafts, setDrafts] = useState([]);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [requestData, setRequestData] = useState(new Date());
  useEffect(() => {
    const getAll = async () => {
      try {
        const myDrafts = await getMyDrafts();
        console.log(myDrafts);
        const myPosts = await getMyPosts();
        console.log(myPosts);
        let data = await fetch("http://localhost:4000/api/users/dashboard", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem(`token`),
          },
        });
        const response = await data.json();
        if (data.ok) {
          setDrafts(response.drafts);
          setUser(response.user);
          setPosts(response.posts);
        } else {
          throw new Error(response.error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, [requestData]);

  return (
    <section>
      <StyledHeader>
        {user.firstName + " " + user.lastName} Dashboard
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
