import React from 'react'
import clsx from 'clsx'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import MenuIcon from '@material-ui/icons/Menu'
import SortIcon from '@material-ui/icons/Sort'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import { useStyles } from './Drawer.styles'
import IconButton from '@material-ui/core/IconButton'
import WavesIcon from '@material-ui/icons/Waves'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import WidgetsIcon from '@material-ui/icons/Widgets'
import { Typography } from '@material-ui/core'
import { SolidAvLogo } from '../../assets'

const menuItems = [
  { text: 'Algorithms', icon: <WidgetsIcon /> },
  { text: 'Recursion', icon: <AcUnitIcon />, onClick: () => {} },
  { text: 'Sorting', icon: <SortIcon /> },
  { text: 'Searching', icon: <FindInPageIcon /> },
  // { text: 'Quantum', icon: <WavesIcon /> },
  // { text: 'Machine learning', icon: <ShowChartIcon /> },
]

type Props = {}

export default function ({}: Props) {
  const classes = useStyles()
  const [state, setState] = React.useState<{ [key in string]: boolean }>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor: string) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography color="inherit" variant="h6" className={classes.title}>
        <SolidAvLogo width="40px" viewBox="0 0 640 640" height="40px" />
      </Typography>
      <List>
        {menuItems.map(({ text, icon, onClick }) => (
          <ListItem button key={text} onClick={onClick}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            {text ? <ListItemText primary={text} /> : null}
          </ListItem>
        ))}
      </List>
    </div>
  )

  const anchor: string = 'left'
  return (
    <React.Fragment key={anchor}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(anchor, true)}
      >
        <MenuIcon className={classes.muiSvgIcon} />
      </IconButton>
      <Drawer
        anchor={anchor as 'left' | 'right' | 'top' | 'bottom'}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  )
}
