import React, { Suspense, useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

import { map, range, random } from 'lodash'
import { makeStyles, createStyles, Theme, fade } from '@material-ui/core/styles'
import ReplayIcon from '@material-ui/icons/Replay'
import {
  ReflexContainer,
  ReflexElement,
  ReflexSplitter,
  ReflexHandle,
} from 'react-reflex'
import 'react-reflex/styles.css'

import {
  ScrollableTabs,
  Wrapper,
  SmallAppBar,
  SmallAppBarButton,
} from '../../components'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { ReflexElementInnerContainer } from './CodeExecution.styles'
import Button from '@material-ui/core/Button'
import jsbeautifier from 'js-beautify'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/lib/codemirror.js'
import styled from 'styled-components'
require('codemirror/mode/javascript/javascript')
require('codemirror/addon/edit/matchbrackets')
require('codemirror/addon/edit/closebrackets')
require('codemirror/addon/runmode/runmode')
require('codemirror/addon/runmode/colorize')
require('codemirror/addon/hint/javascript-hint')
require('codemirror/addon/lint/lint')
require('codemirror/addon/lint/javascript-lint')

const TransitionList = React.lazy(() =>
  import('../../components/TransitionList/TransitionList')
)

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

const initialState = jsbeautifier.js_beautify(`function swap(arr, index1, index2) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function* bubbleSort({
  data
}) {
  let arr = data
  console.log("HELLO FROM THE CODE EXECUTOR!")
  for (let i = arr.length; i >= 2; i--) {
      for (let j = 0; j < i; j++) {
          if (arr[j]?.value > arr[j + 1]?.value) {
              swap(arr, j, j + 1)
          }
      }
      yield arr
  }
  return arr
}

console.log(bubbleSort({
  data: [1, 2, 3, 4, 5]
}))

exports.bubbleSort = bubbleSort`)

type CodeExecutionProps = {
  codeInitialState?: string
  codeToExecute?: (code: string) => void
  onSubmit?: (code: string) => void
  onRun?: (code: string) => void
}

const CodeExecution = ({
  codeInitialState = initialState,
  onSubmit,
  onRun,
}: CodeExecutionProps) => {
  const [code, setCode] = useState<string>(codeInitialState)

  const [verticalSize, setVerticalSize] = useState<any>({
    '1': window.innerWidth / 2,
    '2': window.innerWidth / 2,
    '3': window.innerHeight / 2,
    '4': window.innerHeight / 2,
  })
  const classes = useStyles()
  const minSize = 5

  // useEffect(() => {}, [code])
  // <div className="pane-content">
  //   <label>Top Pane</label>
  // </div>
  // <button onClick={() => setVerticalSize({ '1': 400 })}>
  //   set
  // </button>

  const handleCodeReset = useCallback(() => {
    if (codeInitialState !== code) {
      // console.log('code', code, codeInitialState)
      setCode(jsbeautifier.js_beautify(codeInitialState))
    }
  }, [code, codeInitialState])

  const handleCodeChange = useCallback(
    (editor, data, value) => {
      setCode(value)
    },
    [code]
  )

  const handleSubmit = useCallback(() => {
    onSubmit && onSubmit(code)
  }, [code])

  return (
    <>
      <ReflexContainer orientation="vertical">
        <ReflexElement minSize={minSize}>
          <ReflexContainer orientation="horizontal">
            <ReflexElementPane minSize={minSize}>
              <SmallAppBar></SmallAppBar>
              {/* <ScrollableTabs /> */}
              <ReflexElementInnerContainer>
                <Suspense fallback={<div>Loading...</div>}>
                  <TransitionList />
                </Suspense>
              </ReflexElementInnerContainer>
            </ReflexElementPane>

            {/* <ReflexSplitter className="splitter" />
            <ReflexElementPane minSize={minSize}>
              <SmallAppBar></SmallAppBar>
              <ReflexElementInnerContainer>
                <div className="pane-content">
                  <label>Bottom Pane</label>
                </div>
              </ReflexElementInnerContainer>
            </ReflexElementPane> */}
          </ReflexContainer>
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement minSize={minSize}>
          <ReflexContainer orientation="horizontal">
            <ReflexElementPane minSize={minSize}>
              <SmallAppBar>
                <SmallAppBarButton
                  onClick={handleCodeReset}
                  variant="contained"
                  style={{
                    borderRadius: '0',
                  }}
                >
                  <ReplayIcon fontSize="small" />
                </SmallAppBarButton>
                <SmallAppBarButton>Run</SmallAppBarButton>
              </SmallAppBar>
              <ReflexElementInnerContainer>
                <CodeMirror
                  value={code}
                  options={{
                    theme: 'default',
                    mode: 'javascript',
                    lineNumbers: true,
                    spellcheck: true,
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    autoScroll: false,
                    style: {
                      height: '100%',
                    },
                  }}
                  onBeforeChange={handleCodeChange}
                  onChange={() => {}}
                  onBlur={(editor, event) => {
                    setCode((code) => jsbeautifier.js_beautify(code))
                  }}
                />
              </ReflexElementInnerContainer>
            </ReflexElementPane>

            <ReflexSplitter />

            <ReflexElementPane minSize={minSize}>
              <SmallAppBar>
                <SmallAppBarButton onClick={handleSubmit}>
                  Submit
                </SmallAppBarButton>
              </SmallAppBar>
              <ReflexElementInnerContainer>
                Debug output
              </ReflexElementInnerContainer>
            </ReflexElementPane>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </>
  )
}

export default CodeExecution
