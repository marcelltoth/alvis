import { ThemeType } from './utils'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: ThemeType
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: ThemeType
  }
}
