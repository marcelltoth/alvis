import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'

import * as serviceWorker from './serviceWorker'
import './index.css'
import App from './App'
import { muiTheme, theme } from './utils'
import { GlobalStyles, GlobalCodeMirrorStyles } from 'App.styles'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/material.css'
// import 'codemirror/lib/codemirror.js'
// require('codemirror/mode/javascript/javascript')
// require('codemirror/addon/edit/matchbrackets')
// require('codemirror/addon/edit/closebrackets')
// require('codemirror/addon/runmode/runmode')
// require('codemirror/addon/runmode/colorize')
// require('codemirror/addon/hint/javascript-hint')
// require('codemirror/addon/lint/lint')
// require('codemirror/addon/lint/javascript-lint')

const Root = hot(() => (
  // <React.StrictMode>
  <>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <GlobalCodeMirrorStyles />
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </>
  // </React.StrictMode>
))

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
