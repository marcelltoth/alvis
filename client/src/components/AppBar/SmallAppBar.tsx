import React, { ReactNode } from 'react'

import AppBar, { AppBarProps } from '@material-ui/core/AppBar'
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useAppBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.custom.colors.background,
  },
  toolbarGutters: {
    padding: '0px 0px',
  },
  toolbarRegular: {
    overflow: 'hidden',
    minHeight: '24px',
    height: '32px',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.custom.colors.background,
  },
}))

const useAppBarButtonStyles = makeStyles((theme) => ({
  toolbarButton: {
    height: '100%',
    borderRadius: 0,
    backgroundColor: theme.custom.colors.baseMid,
    '&:active': {
      backgroundColor: theme.custom.colors.active,
      color: theme.custom.colors.baseDark,
    },
    '&:hover': {
      backgroundColor: theme.custom.colors.hover,
      color: theme.custom.colors.baseDark,
    },
  },
}))

type SmallAppBarButtonProps = {
  children: ReactNode
} & ButtonProps

type SmallAppBarProps = {
  children?: ReactNode
  appBar?: AppBarProps
  toolbar?: ToolbarProps
}

export const SmallAppBarButton = ({
  children,
  ...rest
}: SmallAppBarButtonProps) => {
  const classes = useAppBarButtonStyles()
  return (
    <Button {...rest} classes={{ root: classes.toolbarButton }} color="inherit">
      {children}
    </Button>
  )
}

const SmallAppBar = ({ children, appBar, toolbar }: SmallAppBarProps) => {
  const classes = useAppBarStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" {...appBar}>
        <Toolbar
          classes={{
            regular: classes.toolbarRegular,
            gutters: classes.toolbarGutters,
          }}
          {...toolbar}
        >
          {children}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default SmallAppBar
