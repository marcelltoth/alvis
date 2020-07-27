import React, { useEffect, useState, useRef } from 'react'
import {
  Navigation,
  Wrapper,
  CodeHighlighter,
  TransitionList,
} from './components'

import './App.css'
import { countDown, bubbleSort, iterateGenerator } from './utils'
import { Flex } from '@rebass/grid'
import { DraggableList } from './components'
import { Container } from '@material-ui/core'
import Routes from './Routes'

function App() {
  const [state, setState] = useState([2, 6, 3, 9, 1])

  // let code = ''
  // let count = 2
  // for (let i of countDown(count)) {
  //   if (i < 2) {
  //     code += '\n'
  //   }
  //   code += `${i} -> countDown(${count})`
  //   count--
  // }

  return <Routes />
}

export default App

{
  /* <div style={{ width: '50%', margin: 'auto' }}>
<CodeHighlighter
            code={`function countDown(fromNumber) {
              if (fromNumber <= 0) {
                return fromNumber
              }
              return countDown(fromNumber - 1)
            }`}
          />
        </div> */
}

{
  /* <div style={{ width: '50%', margin: 'auto' }}>
<CodeHighlighter code={code} />
</div> */
}
