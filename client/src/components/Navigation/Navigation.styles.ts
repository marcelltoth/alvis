import { fade, makeStyles, withTheme } from '@material-ui/core/styles'
import { transparentize } from 'polished'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  muiAppBar: {
    backgroundColor: theme.palette.common.white,
    position: 'fixed',
    top: 0,
    left: 0,
  },

  title: {
    flexGrow: 1,
    display: 'none',
    color: theme.palette.common.black,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginLeft: '12px',
    },
    fontWeight: 700,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.5),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      backgroundColor: fade(theme.palette.common.black, 0.5),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    backgroundColor: fade(theme.palette.common.white, 0.3),
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    backgroundColor: fade(theme.palette.common.white, 0.3),
    color: theme.palette.common.black,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '0',
      color: 'transparent',
      '&:hover': {
        cursor: 'pointer',
      },
      '&:focus': {
        width: '20ch',
        color: theme.palette.common.black,
        cursor: 'text',
      },
    },
  },
}))
