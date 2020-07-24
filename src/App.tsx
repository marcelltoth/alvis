import React from 'react'
import { Navigation, Wrapper } from './components'
import { AvLogo } from './assets'

function App() {
  return (
    <>
      <Navigation
        left={<AvLogo width="15%" viewBox="0 0 640 640" height="15%" />}
      />
      <Wrapper>Hello</Wrapper>
    </>
  )
}

export default App
