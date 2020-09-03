import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './utils'

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    html,
    body,
    #root {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.colors.background};
        z-index: -100;
    }

    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
  `
