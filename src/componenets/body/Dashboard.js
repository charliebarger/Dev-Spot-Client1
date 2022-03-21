import React from "react";
import styled from "styled-components";
import { Rings } from "react-loader-spinner";
const StyledHeader = styled.h1`
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
  @media ${({ theme }) => theme.mediaQueries.below700} {
    margin: 1rem 0.5rem;
  }
`;

const StyledWrapper = styled.div`
  height: 150px;
  width: 150px;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    height: 125px;
    width: 125px;
  }
`;

const StyledArticleAnchor = styled.a`
  padding: 5rem;
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
  border-bottom: 2px solid black;
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

const Dashboard = () => {
  //   const registerUser = async (e) => {
  //     e.preventDefault();
  //     try {
  //       let data = await fetch("http://localhost:4000/api/users/login", {
  //         method: "POST",
  //         mode: "cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password }),
  //       });
  //       const response = await data.json();
  //       if (data.ok) {
  //         navigate("/");
  //         setLoggedIn(true);
  //         localStorage.setItem("token", response.token);
  //       } else {
  //         setError(response.error);
  //         throw new Error(response.error);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       navigate("/signIn");
  //     }
  //   };

  return (
    <section>
      <StyledHeader>Charlie Barger's Dashboard</StyledHeader>
      <section>
        <StyledSubHeader>Published Posts</StyledSubHeader>
        <StyledMargin>
          <StyledArticleAnchor>
            <StyledArticle>
              <StyledTopDivWrapper>
                <StyledArticleHeader>
                  The Odin Project The Odin Project
                </StyledArticleHeader>
                <StyledImgWrapper></StyledImgWrapper>
              </StyledTopDivWrapper>
              <StyledFooter>
                <StyledSpan>Last Edited: 10/26/2021</StyledSpan>
              </StyledFooter>
            </StyledArticle>
          </StyledArticleAnchor>
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
        </StyledMargin>
      </section>
      <section>
        <StyledSubHeader>Unpublished Posts</StyledSubHeader>
        <StyledMargin>
          <StyledImageSection>
            <StyledWrapper>
              <Rings
                height="100%"
                width="100%"
                ariaLabel="loading"
                color="rgba(117, 117, 117, 1)"
              />
            </StyledWrapper>
            <StyledMessage>No Unpublished Posts</StyledMessage>
          </StyledImageSection>
        </StyledMargin>
      </section>
    </section>
  );
};

export default Dashboard;
