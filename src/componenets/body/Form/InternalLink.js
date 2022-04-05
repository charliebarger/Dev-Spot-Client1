import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const StyledInternalLink = styled.a`
  color: #00b7ff;
  display: block;
  padding: 1rem 0;
  cursor: pointer;
`;

const InternalLink = ({ children, url }) => {
  const navigate = useNavigate();
  return (
    <StyledInternalLink onClick={() => navigate(url)}>
      {children}
    </StyledInternalLink>
  );
};

export default InternalLink;
