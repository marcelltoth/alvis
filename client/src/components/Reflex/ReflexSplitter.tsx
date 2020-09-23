import React from 'react'
import styled from 'styled-components'
import {
  ReflexSplitter as ReactReflexSplitterRaw,
  ReflexSplitterProps,
} from 'react-reflex'

import 'react-reflex/styles.css'

export const ReactReflexSplitter = styled(ReactReflexSplitterRaw)`
  border: none;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: transparent;
`

type Props = {} & ReflexSplitterProps

const ReflexSplitter = ({}: Props) => {
  return <ReactReflexSplitter />
}

export default ReflexSplitter
