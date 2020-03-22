import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal, css } from 'styled-components';
import './styles/_reset.js';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import theme from './styles/theme';

injectGlobal`
  body {
    background-color: ${theme.colors.indigo[2]};
    color: ${theme.colors.indigo[900]};
    font-family: ${theme.font.family};
  }
`;

const StyledPage = styled.div`
  display: grid;
  grid-template-rows: ${props => (props.noFrame ? '4px 1fr' : '64px 1fr 48px')};
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;

  @media screen and (min-width: ${theme.mediaQueries.desktop.small}) {
    grid-template-rows: 85px 1fr 64px;
  }

  main {
    ${props =>
      props.noFrame ||
      css`
        margin-top: ${theme.layout.margin.small};
      `}
    margin-bottom: ${theme.layout.margin.medium};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage noFrame={this.props.noFrame}>
          <Meta />
          <Header noFrame={this.props.noFrame}/>
          <main className="main">{this.props.children}</main>
          {this.props.noFrame || <Footer />}
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
