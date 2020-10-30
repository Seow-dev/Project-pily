import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../Common/DeviceSize";

export const Logo = () => {
  return (
    <Link to="/">
      <LogoStyles>Pily</LogoStyles>
    </Link>
  );
};

const LogoStyles = styled.h2`
  font-family: "Abril Fatface", cursive;
  position: relative;
  top: 1rem;
  font-size: 2rem;
  margin: 0;
  color: #343a40;
  margin-left: 3rem;

  ${media.desktop} {
    margin-left: 2rem;
  }
  ${media.tablet} {
    margin-left: 1rem;
  }
`;
