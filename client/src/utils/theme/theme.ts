import { rem } from 'polished'
import { createMuiTheme } from '@material-ui/core/styles'

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})

export type ThemeType = {
  breakpoints: string[]
  boxShadow: string
  clientBoxShadow: string
  colours: {
    base: string
    baseMid: string
    baseLight: string
    baseExtraLight: string

    primary: string
    hover: string
    pressed: string
    danger: string
    success: string
    warning: string
    highlight: string

    background: string
    foreground: string

    primary10: string
    primary20: string

    lightOrange: string
    orange: string
    babyPink: string
    pink: string
    lightPurple: string
    purple: string
    lightRed: string
    lightBlue: string
    periwinkle: string
    skyBlue: string
    aquaBlue: string
    lightGreen: string
    green: string
    darkGreen: string
    grey: string
    lightYellow: string
    darkYellow: string
  }

  opacity: {
    op50: number
    op80: number
    op90: number
    op95: number
  }

  typography: {
    fontSizes: {
      size12: string
      size14: string
      size16: string
      size20: string
      size26: string
      size32: string
      size42: string
    }

    lineHeight: string
    lineHeightSmall: string
    fontFamilyDisplay: string
    fontFamily: string
    fontWeight: string
    fontWeightBold: string
  }

  display: {
    borderRadius: string
    inputHeight: string

    navHeightSmall: number
    navHeightMedium: number
    navHeightLarge: number
    navTextWidth: number
    navIconWidth: number
    navZIndex: number
    subnavZIndex: number
    dropdownWrapperZIndex: number
    dropdownOptionsZIndex: number
    modalHeadingZIndex: number
    modalHeadingHeight: number
    modalPadding: string
    popOverWidthMin: number
    popOverWidthMax: number
    formMediumWidth: number
    drawerNavWidth: number
  }

  spacers: {
    size4: string
    size8: string
    size12: string
    size16: string
    size24: string
    size32: string
    size40: string
    size48: string
    size64: string
    size80: string
    size128: string
  }

  wrappers: {
    a4Width: string
    small: string
    medium: string
    large: string
    extraLarge: string
    fullScreen: string
    mediumBreakpoint: number
  }
}

export const theme = {
  breakpoints: ['950px', '1024px'],
  boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.2)',
  clientBoxShadow: '0px 4px 10px rgba(28, 36, 82, 0.1)',
  colours: {
    base: '#444444',
    baseMid: '#71747E',
    baseLight: '#D7DAE0',
    baseExtraLight: '#F5F6FA',

    primary: '#0E4EFB',
    hover: '#507FFF',
    pressed: '#0035C5',
    danger: '#CC0700',
    success: '#007B46',
    warning: '#FF8500',
    highlight: '#CC0700',
    dark: '#021727',

    background: '#F9F9FA',
    foreground: '#FFFFFF',

    primary10: '#E6EDFF',
    primary20: '#CEE5FF',

    lightOrange: '#FFE0B2',
    orange: '#FFCAB4',
    babyPink: '#FFCDD2',
    pink: '#FFB5CF',
    lightPurple: '#F7D8F3',
    purple: '#C4B2F7',
    lightRed: '#FFD5D5',
    lightBlue: '#BBE4FB',
    periwinkle: '#C2D3FF',
    skyBlue: '#B2EDF2',
    aquaBlue: '#C5F3F3',
    lightGreen: '#D4E8B4',
    green: '#ABE7AD',
    darkGreen: '#0DA060',
    grey: '#CED9E0',
    lightYellow: '#FFEBC4',
    darkYellow: '#C43A00',
  },

  opacity: {
    op50: 0.5,
    op80: 0.8,
    op90: 0.9,
    op95: 0.95,
  },

  typography: {
    fontSizes: {
      size12: '12px',
      size14: '14px',
      size16: '16px',
      size20: '20px',
      size26: '26px',
      size32: '32px',
      size42: '42px',
    },

    lineHeight: '1.6',
    lineHeightSmall: '1.4',

    fontFamilyDisplay: 'Playfair Display, serif',
    fontFamily: 'Futura, Roboto, sans-serif',
    fontWeight: '400',
    fontWeightBold: '600',
  },

  display: {
    inputHeight: '48px',
    borderRadius: '6px',

    navHeightSmall: 50,
    navHeightMedium: 112,
    navHeightLarge: 156,
    navTextWidth: 120,
    navIconWidth: 50,
    navZIndex: 2,
    subnavZIndex: 1,
    popOverWidthMin: 180,
    popOverWidthMax: 400,
    dropdownWrapperZIndex: 10,
    dropdownOptionsZIndex: 11,
    modalHeadingZIndex: 100,
    modalHeadingHeight: 96,
    modalPadding: '3rem',
    formMediumWidth: 480,
    drawerNavWidth: 320,
  },

  spacers: {
    size4: rem('4px'),
    size8: rem('8px'),
    size12: rem('12px'),
    size16: rem('16px'),
    size24: rem('24px'),
    size32: rem('32px'),
    size40: rem('40px'),
    size48: rem('48px'),
    size64: rem('64px'),
    size80: rem('80px'),
    size128: rem('128px'),
  },

  wrappers: {
    a4Width: '8.27in',
    small: '320px',
    medium: '480px',
    large: '800px',
    extraLarge: '1280px',
    fullScreen: '100vh',
    mediumBreakpoint: 768,
  },
}
