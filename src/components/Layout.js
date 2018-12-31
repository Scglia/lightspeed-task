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
  padding: 0 20px;
`;

const LinkStyled = styled.span`
  margin-right: 10px;
`;

const Layout = ({ children }) => (
  <LayoutStyled>
    <GlobalStyle />
    <h1>Shopping Cart Example</h1>
    <nav>
      <LinkStyled>
        <Link to="/">Products</Link>
      </LinkStyled>
      <LinkStyled>
        <Link to="/cart">Cart</Link>
      </LinkStyled>
    </nav>
    {children}
  </LayoutStyled>
);

export default Layout;
