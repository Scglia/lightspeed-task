import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: rgb(230, 230, 230);
  }
`;

const LayoutStyled = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Layout = ({ children }) => (
  <LayoutStyled>
    <GlobalStyle />
    <h1>Shopping Cart Example</h1>
    <nav>
      <Link to="/">Products</Link>
    </nav>
    {children}
  </LayoutStyled>
);

export default Layout;
