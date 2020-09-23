import React, { useState } from 'react'
import classNames from 'classnames'

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
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import { ReflexElementInnerContainer } from './CodeExecution.styles'
require('codemirror/mode/javascript/javascript')

const useStyles = makeStyles((theme) => ({
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
  innerReflexElement: {},
}))

// how to make each card larger on drag?

const verticalSplitterStyle = {
  width: '10px',
  zIndex: 10,
}
const horizontalSplitterStyle = {
  height: '10px',
}

const splitterStyle = {
  border: 'none',
  boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
  background: 'transparent',
}

const CodeExecution = () => {
  const [verticalSize, setVerticalSize] = useState<any>({
    '1': window.innerWidth / 2,
    '2': window.innerWidth / 2,
    '3': window.innerHeight / 2,
    '4': window.innerHeight / 2,
  })
  const classes = useStyles()

  return (
    <>
      <ReflexContainer orientation="vertical">
        <ReflexElement minSize={50}>
          <ReflexContainer orientation="horizontal">
            <ReflexElement minSize={50}>
              <ReflexElementInnerContainer>
                <div className="pane-content">
                  <label>Top Pane</label>
                </div>
                <button onClick={() => setVerticalSize({ '1': 400 })}>
                  set
                </button>
              </ReflexElementInnerContainer>
            </ReflexElement>

            <ReflexSplitter
              style={{ ...splitterStyle, ...horizontalSplitterStyle }}
            />

            <ReflexElement minSize={50}>
              <ReflexElementInnerContainer>
                <div className="pane-content">
                  <label>Bottom Pane</label>
                </div>
              </ReflexElementInnerContainer>
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>

        <ReflexSplitter
          style={{ ...splitterStyle, ...verticalSplitterStyle }}
        />

        <ReflexElement minSize={50}>
          <ReflexContainer orientation="horizontal">
            <ReflexElement minSize={50}>
              <ReflexElementInnerContainer>
                <CodeMirror
                  value="<h1>I ♥ react-codemirror2</h1>"
                  options={{
                    theme: 'default',
                    mode: 'javascript',
                    lineNumbers: true,
                    spellcheck: true,
                    style: {
                      height: '100%',
                    },
                  }}
                  onChange={(editor, data, value) => {}}
                />
              </ReflexElementInnerContainer>
            </ReflexElement>

            <ReflexSplitter
              style={{ ...splitterStyle, ...horizontalSplitterStyle }}
            />

            <ReflexElement minSize={50}>
              <ReflexElementInnerContainer>
                <div className="pane-content">
                  <label>Bottom Pane</label>
                </div>{' '}
              </ReflexElementInnerContainer>
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </>
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
