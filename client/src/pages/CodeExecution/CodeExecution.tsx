import React, { useState } from 'react'
import classNames from 'classnames'

import { map, range, random } from 'lodash'
import { makeStyles, createStyles, Theme, fade } from '@material-ui/core/styles'
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

import { Wrapper } from '../../components'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { ReflexElementInnerContainer } from './CodeExecution.styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/lib/codemirror.js'
import CodeExecutionPanelAppBar, {
  CodeExecutionPanelAppBarButton,
} from './CodeExecutionPanelAppBar'
import styled, { css } from 'styled-components'
require('codemirror/mode/javascript/javascript')
require('codemirror/addon/edit/matchbrackets')
require('codemirror/addon/edit/closebrackets')
require('codemirror/addon/runmode/runmode')
require('codemirror/addon/runmode/colorize')
require('codemirror/addon/hint/javascript-hint')
require('codemirror/addon/lint/lint')
require('codemirror/addon/lint/javascript-lint')

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
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarGutters: {
    padding: '0px 4px',
  },
  toolbarRegular: {
    minHeight: '24px',
    height: '32px',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.custom.colors.background,
  },
  toolbarButton: {
    padding: '2px 10px',
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

const ReflexElementPane = styled(ReflexElement)`
  display: flex;
  flex-direction: column;
`

const CodeExecution = () => {
  const [verticalSize, setVerticalSize] = useState<any>({
    '1': window.innerWidth / 2,
    '2': window.innerWidth / 2,
    '3': window.innerHeight / 2,
    '4': window.innerHeight / 2,
  })
  const classes = useStyles()
  const minSize = 5
  return (
    <>
      <ReflexContainer orientation="vertical">
        <ReflexElement minSize={minSize}>
          <ReflexContainer orientation="horizontal">
            <ReflexElementPane minSize={minSize}>
              <CodeExecutionPanelAppBar></CodeExecutionPanelAppBar>
              <ReflexElementInnerContainer>
                <div className="pane-content">
                  <label>Top Pane</label>
                </div>
                <button onClick={() => setVerticalSize({ '1': 400 })}>
                  set
                </button>
              </ReflexElementInnerContainer>
            </ReflexElementPane>

            <ReflexSplitter className="splitter" />

            <ReflexElementPane minSize={minSize}>
              <CodeExecutionPanelAppBar></CodeExecutionPanelAppBar>
              <ReflexElementInnerContainer>
                <div className="pane-content">
                  <label>Bottom Pane</label>
                </div>
              </ReflexElementInnerContainer>
            </ReflexElementPane>
          </ReflexContainer>
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement minSize={minSize}>
          <ReflexContainer orientation="horizontal">
            <ReflexElementPane minSize={minSize}>
              <CodeExecutionPanelAppBar>
                <CodeExecutionPanelAppBarButton>
                  Run
                </CodeExecutionPanelAppBarButton>
              </CodeExecutionPanelAppBar>
              <ReflexElementInnerContainer>
                <CodeMirror
                  value={`const func = () => console.log('HELLO')
func()














`}
                  options={{
                    theme: 'default',
                    mode: 'javascript',
                    lineNumbers: true,
                    spellcheck: true,
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    style: {
                      height: '100%',
                    },
                  }}
                  onChange={(editor, data, value) => {}}
                />
              </ReflexElementInnerContainer>
            </ReflexElementPane>

            <ReflexSplitter />

            <ReflexElementPane minSize={minSize}>
              <CodeExecutionPanelAppBar>
                <CodeExecutionPanelAppBarButton>
                  Submit
                </CodeExecutionPanelAppBarButton>
              </CodeExecutionPanelAppBar>
              <ReflexElementInnerContainer>
                Bottom Right
              </ReflexElementInnerContainer>
            </ReflexElementPane>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </>
  )
}

export default CodeExecution
