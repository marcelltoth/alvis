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
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols'
import WidgetsIcon from '@material-ui/icons/Widgets'
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import CloudIcon from '@material-ui/icons/Cloud'
import FunctionsIcon from '@material-ui/icons/Functions'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import WebIcon from '@material-ui/icons/Web'
import { Typography } from '@material-ui/core'
import { SolidAvLogo } from '../../assets'
import { ControlledAccordions } from '../ControlledAccordions'
import SettingsApplicationsTwoToneIcon from '@material-ui/icons/SettingsApplicationsTwoTone'

const menuItems = [
  {
    text: 'Algorithms',
    icon: <WidgetsIcon />,
    children: [
      { text: 'Recursion', icon: <AcUnitIcon />, onClick: () => {} },
      { text: 'Sorting', icon: <SortIcon /> },
      { text: 'Searching', icon: <FindInPageIcon /> },
    ],
  },
  { text: 'Data structures', icon: <FormatAlignCenterIcon /> },
  { text: 'Quantum', icon: <WavesIcon /> },
  { text: 'Machine learning', icon: <ShowChartIcon /> },
  { text: 'System design', icon: <SettingsApplicationsTwoToneIcon /> },
  {
    text: 'General knowledge',
    icon: <EmojiObjectsIcon />,
    children: [
      { text: 'HTTPS', icon: <AcUnitIcon />, onClick: () => {} },
      { text: 'Authentication', icon: <SortIcon /> },
    ],
  },
  { text: 'Security', icon: <LockOpenIcon /> },
  { text: 'Testing', icon: <EmojiSymbolsIcon /> },
  { text: 'GMAT', icon: <FunctionsIcon /> },
  { text: 'CFA', icon: <AttachMoneyIcon /> },
  { text: 'Cloud computing', icon: <CloudIcon /> },
  { text: 'Web development', icon: <WebIcon /> },
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
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography color="inherit" variant="h6" className={classes.title}>
        <SolidAvLogo width="40px" viewBox="0 0 640 640" height="40px" />
      </Typography>
      <List>
        {menuItems.map(({ text, icon, children }, index) => (
          <ControlledAccordions
            key={text}
            title={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                {text ? <ListItemText primary={text} /> : null}
              </div>
            }
            id={text}
          >
            {children?.map(({ text, icon }) => {
              return (
                <ListItem
                  button
                  key={`${text}${index}`}
                  onClick={toggleDrawer(anchor, false)}
                >
                  {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                  {text ? <ListItemText primary={text} /> : null}
                </ListItem>
              )
            })}
          </ControlledAccordions>
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
