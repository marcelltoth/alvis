import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { useStyles } from './Navigation.styles'
import { Drawer } from '../Drawer'
import { Flex } from '@rebass/grid'
import { SolidAvLogo } from '../../assets'
import { Box } from '@material-ui/core'

export default function SearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.muiAppBar} position="static">
        <Toolbar
          classes={{
            root: classes.toolbar,
          }}
        >
          <Drawer />
          <Typography color="inherit" variant="h6" className={classes.title}>
            <SolidAvLogo width="40px" viewBox="0 0 640 640" height="40px" />
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </div>
  )
}
