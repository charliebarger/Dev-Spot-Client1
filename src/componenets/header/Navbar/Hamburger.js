import React, { useContext } from "react";
import styled, { css } from "styled-components";
//Start Styles
import { NavContext } from "../utils/NavContext";

const HamburgerIcon = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaQueries.below550} {
    width: 30px;
    margin-left: 30px;

    display: block;
    div,
    &:after,
    &:before {
      background: white;
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      margin: 6px 0px;
      transition: all 0.5s;
    }

    ${({ closed }) =>
      closed &&
      css`
        div {
          transform: scale(0);
        }
        &:before {
          transform: translateY(8px) rotate(135deg);
        }
        &:after {
          transform: translateY(-8px) rotate(-135deg);
        }
        div,
        &:after,
        &:before {
          transition: all 0.5s;
        }
      `}

    ${({ slide }) =>
      slide &&
      css`
        position: absolute;
      `}
  }
`;

//End Styles

const Hamburger = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <HamburgerIcon closed={closed} onClick={() => setClosed(!closed)}>
      <div />
    </HamburgerIcon>
  );
};

export default Hamburger;
