import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
const StyledLogoWrapper = styled.div`
  display: flex;
  color: white;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  align-items: center;
  * {
    cursor: pointer;
  }
`;

const StyledLogo = styled.img`
  height: 30px;
`;

const StyledCompanyName = styled.span`
  padding: 0 0.5rem;
  font-size: 1.25rem;
`;

const Logo = () => {
  return (
    <StyledLogoWrapper>
      <StyledLogo alt="logo" src={logo}></StyledLogo>
      <StyledCompanyName>Dev Spot</StyledCompanyName>
    </StyledLogoWrapper>
  );
};

export default Logo;
