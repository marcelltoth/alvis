import React, { ReactNode } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
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

type CodeExecutionPanelAppBarButtonProps = {
  children: ReactNode
}

type CodeExecutionPanelAppBarProps = {
  children?: ReactNode
}

export const CodeExecutionPanelAppBarButton = ({
  children,
}: CodeExecutionPanelAppBarButtonProps) => {
  const classes = useAppBarButtonStyles()
  return (
    <Button classes={{ root: classes.toolbarButton }} color="inherit">
      {children}
    </Button>
  )
}

const CodeExecutionPanelAppBar = ({
  children,
}: CodeExecutionPanelAppBarProps) => {
  const classes = useAppBarStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          classes={{
            regular: classes.toolbarRegular,
            gutters: classes.toolbarGutters,
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default CodeExecutionPanelAppBar
