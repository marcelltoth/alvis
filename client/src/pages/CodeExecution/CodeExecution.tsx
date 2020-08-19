import React from 'react'
import { map, range, random } from 'lodash'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CodeExecutionPanel from './CodeExecutionPanel'

const useStyles = makeStyles({
  paper: {
    display: 'grid',
    gridGap: '0.1rem',
    width: '100%',
    justifyItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerGrid: {
    justifyContent: 'center',
    height: '100%',
  },
  innerGrid: {
    justifyContent: 'center',
  },
})

// how to make each card larger on drag?

const CodeExecution = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={1} className={classes.outerGrid}>
      <Grid container item xs={12} spacing={1} className={classes.innerGrid}>
        <Grid item lg={6} md={6} xs={12}>
          <CodeExecutionPanel />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <CodeExecutionPanel />
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={1} className={classes.innerGrid}>
        <Grid item lg={6} md={6} xs={12}>
          <CodeExecutionPanel />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <CodeExecutionPanel />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CodeExecution
