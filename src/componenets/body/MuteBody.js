import styled from "styled-components";
import React, { useContext } from "react";
import { NavContext } from "../utils/NavContext";
const StyledMuteBody = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaQueries.below850} {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: grey;
    z-index: ${({ closed }) => (closed ? 1 : 0)};
    transition: opacity 0.5s;
    opacity: ${({ closed }) => (closed ? 0.9 : 0)};
  }
`;
const MuteBody = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <StyledMuteBody
      closed={closed}
      onClick={() => setClosed(false)}
    ></StyledMuteBody>
  );
};

export default MuteBody;
