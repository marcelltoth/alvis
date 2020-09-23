import React from 'react'
import { map, range, random } from 'lodash'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CodeExecutionPanel from './CodeExecutionPanel'
import {
  ReflexContainer,
  ReflexElement,
  ReflexSplitter,
  ReflexHandle,
} from 'react-reflex'
import 'react-reflex/styles.css'

import {
  Reflex,
  FirsReflextElement,
  SecondReflexElement,
} from '../../components'

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

const verticalSplitterStyle = {
  width: '10px',
  zIndex: 0,
}
const horizontalSplitterStyle = {
  height: '10px',
}

const splitterStyle = {
  border: 'none',
  boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
}

const CodeExecution = () => {
  const classes = useStyles()

  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement minSize={50}>
        <ReflexContainer orientation="horizontal">
          <ReflexElement minSize={50}>
            <div className="pane-content">
              <label>Top Pane</label>
            </div>
          </ReflexElement>

          <ReflexSplitter
            style={{ ...splitterStyle, ...horizontalSplitterStyle }}
          />

          <ReflexElement minSize={50}>
            <div className="pane-content">
              <label>Bottom Pane</label>
            </div>
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>

      <ReflexSplitter style={{ ...splitterStyle, ...verticalSplitterStyle }} />

      <ReflexElement minSize={50}>
        <ReflexContainer orientation="horizontal">
          <ReflexElement minSize={50}>
            <div className="pane-content">
              <label>Top Pane</label>
            </div>
          </ReflexElement>

          <ReflexSplitter
            style={{ ...splitterStyle, ...horizontalSplitterStyle }}
          />

          <ReflexElement minSize={36}>
            <div className="pane-content">
              <label>Bottom Pane</label>
            </div>
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>

    // <Grid container spacing={1} className={classes.outerGrid}>
    //   <Grid container item xs={12} spacing={1} className={classes.innerGrid}>
    //     <Grid item lg={6} md={6} xs={12}>
    //       <CodeExecutionPanel />
    //     </Grid>
    //     <Grid item lg={6} md={6} xs={12}>
    //       <CodeExecutionPanel />
    //     </Grid>
    //   </Grid>
    // </Grid>
  )
}

export default CodeExecution
