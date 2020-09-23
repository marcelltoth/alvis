import React from 'react'
import { ReactNode } from 'react'

import {
  ReflexContainer,
  ReflexElement,
  ReflexSplitter,
  ReflexHandle,
  ReflexContainerProps,
} from 'react-reflex'
import 'react-reflex/styles.css'

type ElementProps = {
  children: ReactNode
}
type ReflexHorizontalProps = {
  first: ReactNode
  second: ReactNode
  container?: ReflexContainerProps
}

export const FirsReflextElement = ({ children }: ElementProps) => {
  return (
    <ReflexElement minSize={36}>
      <div className="handle">Top Pane Header</div>
      <div className="pane-content">
        <label>Top Pane</label>
      </div>
      {children}
    </ReflexElement>
  )
}

export const SecondReflexElement = ({ children }: ElementProps) => {
  return (
    <ReflexElement minSize={36}>
      <ReflexHandle className="handle">
        Bottom Pane Header: I am a draggable handle! Drag me to resize ...
      </ReflexHandle>
      <div className="pane-content">
        <label>Bottom Pane</label>
      </div>
      {children}
    </ReflexElement>
  )
}

const Reflex = ({
  first,
  second,
  container: { orientation = 'horizontal' } = {},
}: ReflexHorizontalProps) => {
  return (
    <ReflexContainer orientation={orientation}>
      {first}
      <ReflexSplitter />
      {second}
    </ReflexContainer>
  )
}

export default Reflex
