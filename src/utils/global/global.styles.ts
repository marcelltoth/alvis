import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html,
  body {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSizes.size16};
    font-weight: ${({ theme }) => theme.typography.fontWeight};
    color: ${({ theme }) => theme.colours.base};
    background: ${({ theme }) => theme.colours.background};
  }

  html {
    overflow-y: scroll;
  }

  html,
  body,
  #app,
  .router {
    height: 100%;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${({ theme }) => theme.colours.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-size: ${({ theme }) => theme.typography.fontSizes.size16};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background: transparent;
    cursor: pointer;
    border: 0 none;
  }

  input {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  textarea {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  /* We dont want the tickers */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .infinite-scroll-component {
    overflow: inherit !important;
  }
  `
