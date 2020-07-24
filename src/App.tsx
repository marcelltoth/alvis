import React from 'react'
import { Navigation, Wrapper, CodeHighlighter } from './components'
import { Svg3DAvLogo, Burger } from './assets'

import './App.css'
import { countDown } from './utils'
import { Flex } from '@rebass/grid'

function App() {
  let code = ''
  let count = 2
  for (let i of countDown(count)) {
    if (i < 2) {
      code += '\n'
    }
    code += `${i} -> countDown(${count})`
    count--
  }

  console.log('code', code)

  return (
    <>
      <Navigation left={<Burger />}>
        <Flex flexDirection="column" alignItems="center">
          <Svg3DAvLogo width="40px" viewBox="0 0 640 640" height="40px" />
          ALVIS
        </Flex>
      </Navigation>
      <Wrapper>
        <div style={{ width: '50%', margin: 'auto' }}>
          <CodeHighlighter
            code={`function countDown(fromNumber) {
              if (fromNumber <= 0) {
                return fromNumber
              }
              return countDown(fromNumber - 1)
            }`}
          />
        </div>
        <div style={{ width: '50%', margin: 'auto' }}>
          <CodeHighlighter code={code} />
        </div>
      </Wrapper>
    </>
  )
}

export default App
