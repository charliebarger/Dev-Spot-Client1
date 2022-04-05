import React from "react";
import styled from "styled-components";

const StyledCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.logoColor};
`;

const NotFound = () => {
  return (
    <StyledCenterDiv>
      <div>404 Error</div>
      <div>Page Not Found</div>
    </StyledCenterDiv>
  );
};

export default NotFound;
