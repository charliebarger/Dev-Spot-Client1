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
