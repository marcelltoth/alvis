import { makeStyles, fade } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  muiSvgIcon: {
    fill: fade(theme.palette.common.black, 0.25),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
  },
}))
