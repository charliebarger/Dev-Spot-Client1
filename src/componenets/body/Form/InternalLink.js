import styled, { css } from "styled-components";
import React from "react";

const StyledInternalLink = styled.a`
  color: #00b7ff;
  display: block;
  padding: 1rem 0;
`;

const InternalLink = ({ children }) => {
  return <StyledInternalLink>{children}</StyledInternalLink>;
};

export default InternalLink;
