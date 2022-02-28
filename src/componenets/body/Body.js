import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImg from "../../assets/images/background.svg";
import { NavContext } from "../utils/NavContext";
const StyledBody = styled.main`
  min-height: calc(100vh - 62px);
  padding: 0 1rem;
  position: relative;
  * {
    cursor: pointer;
  }
`;

const MuteBody = styled.div`
  @media ${({ theme }) => theme.mediaQueries.below850} {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: grey;
    z-index: 1;
    transition: 0.5s;
    opacity: ${({ closed }) => (closed ? 0.9 : 0)};
  }
`;

const StyledBannerWrapper = styled.section`
  width: 100%;
`;

const StyledHeader = styled.section`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 400;
`;

const Body = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledBody>
      <MuteBody closed={closed} onClick={() => setClosed(false)} />
      <StyledBannerWrapper>
        <div class="terminal">
          <div class="terminal_top">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="terminal-main">
            <div class="terminal-wrapper">
              <div class="welcome">
                <span>$</span>
                &nbsp;
                <h1>Welcome To Dev Spot</h1>
              </div>
              <div>
                <h2>
                  A place for developers to talk, post, and comments on the
                  hottest news in tech!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </StyledBannerWrapper>
    </StyledBody>
  );
};

export default Body;
