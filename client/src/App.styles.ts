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

    .reflex-container > .reflex-splitter {
        background: ${({ theme }) => theme.colors.background};
    }

    .reflex-splitter {
        border: none !important;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        background: transparent;
        
    }

    .reflex-container.vertical > .reflex-splitter {
        width: 10px;
        border: none;
    }

    .horizontal > .reflex-splitter {
        height: 10px;
        border: none;
        z-index: 101 !important;
    }

    .cm-s-default {
        background: transparent;
        min-height: 100%;
        height: 100%;
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
