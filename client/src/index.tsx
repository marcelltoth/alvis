import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import * as serviceWorker from './serviceWorker'
import './index.css'
import App from './App'
import { muiTheme, theme } from './utils'

const Root = hot(() => (
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
))

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
