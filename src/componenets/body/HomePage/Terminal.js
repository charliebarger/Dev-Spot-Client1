import React from "react";
import styled, { keyframes } from "styled-components";

const typwriter = keyframes`
to {
    left: 100%;
  }
`;

const removeLine = keyframes`
to {
    border-color: black;
  }
`;

const fadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledTerminalWrapper = styled.section`
  font-family: Menlo, Monaco, "Courier New", monospace;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  position: relative;
  color: #fff;
  max-width: 548px;
  padding: 2rem 0;
  margin: auto;
`;

const StyledTerminalTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 8px 8px 0 0;
  background-color: hsla(0, 0%, 87%, 1);
  border: hsla(0, 0%, 60%, 1) solid 1px;

  > div {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0px;
    border-radius: 100%;
    border: solid 1px;
  }

  > div:nth-child(1) {
    background-color: hsla(3, 96%, 65%, 1);
    border-color: hsla(3, 96%, 59%, 1);
  }

  > div:nth-child(2) {
    background-color: hsla(45, 100%, 51%, 1);
    border-color: hsla(45, 100%, 45%, 1);
  }

  > div:nth-child(3) {
    background-color: hsla(125, 70%, 60%, 1);
    border-color: hsla(125, 70%, 45%, 1);
  }
`;

const StyledTerminalMain = styled.div`
  padding-bottom: 56.25%;
  border-radius: 0 0 8px 8px;
  background-color: hsl(0, 0%, 0%);
  position: relative;
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
`;

const StyledWelcomeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25rem 0 0.75rem 0;
  > * {
    font-size: 34px;
    font-weight: 300;
  }
  @media ${({ theme }) => theme.mediaQueries.below600} {
    && > * {
      font-size: 28px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    && > * {
      font-size: 20px;
    }
  }
`;

const StyledTerminalHeader = styled.h1`
  color: #26dd3a;
  margin: 0;
  position: relative;
  padding: 0.5rem 0;
  width: max - content;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: black;
    border-left: white solid 2px;
    animation: ${typwriter} 2s steps(19) forwards,
      ${removeLine} 0s 2.1s forwards;
  }
`;

const StyledTerminalSubHeader = styled.h2`
  opacity: 0;
  font-size: 22px;
  font-weight: 300;
  margin: 0;
  line-height: 28px;
  animation: ${fadeIn} 1.5s 2.25s forwards;
  @media ${({ theme }) => theme.mediaQueries.below500} {
    font-size: 18px;
  }
`;

const Terminal = () => {
  return (
    <StyledTerminalWrapper>
      <StyledTerminalTop>
        <div></div>
        <div></div>
        <div></div>
      </StyledTerminalTop>
      <StyledTerminalMain>
        <StyledWrapper>
          <StyledWelcomeWrapper>
            <span>$</span>
            &nbsp;
            <StyledTerminalHeader>Welcome To Dev Spot</StyledTerminalHeader>
          </StyledWelcomeWrapper>
          <div>
            <StyledTerminalSubHeader>
              A place for developers to talk, post, and comment on the hottest
              news in tech!
            </StyledTerminalSubHeader>
          </div>
        </StyledWrapper>
      </StyledTerminalMain>
    </StyledTerminalWrapper>
  );
};

export default Terminal;
