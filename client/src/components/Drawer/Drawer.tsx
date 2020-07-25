import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import MenuIcon from '@material-ui/icons/Menu'

const menuItems = [
  { text: 'Recursion', icon: <AcUnitIcon />, onClick: () => {} },
  { text: 'Sorting' },
]

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

export default function () {
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
      <List>
        {menuItems.map(({ text, icon, onClick }) => (
          <ListItem key={text}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            {text ? <ListItemText primary={text} /> : null}
          </ListItem>
        ))}
      </List>
      <Divider />
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
      <Button onClick={toggleDrawer(anchor, true)}>
        <MenuIcon />
      </Button>
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
