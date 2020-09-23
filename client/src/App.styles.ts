import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './utils'

export const GlobalCodeMirrorStyles = createGlobalStyle<{ theme: ThemeType }>`
    .react-codemirror2 {    
        height: 100%;
        overflow: hidden;
    }
    .CodeMirror {
        height: 0px !important;
    }
    .cm-s-default {
        background: transparent;
        min-height: 100%;
        .CodeMirror-gutters {
            background: transparent;
        }
        .CodeMirror {
            height: 100% !important;
            background: transparent !important;
        }
        .CodeMirror-scroll {
            padding-bottom: 0;
        }
    }
`

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
        z-index: ${({ theme }) => theme.zIndex - 100};
        overflow: hidden;
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
