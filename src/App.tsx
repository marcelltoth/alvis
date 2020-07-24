import React from 'react'
import { Navigation, Wrapper } from './components'
import { Svg3DAvLogo } from './assets'

import './App.css'

function App() {
  return (
    <>
      <Navigation
        left={<Svg3DAvLogo width="40px" viewBox="0 0 640 640" height="40px" />}
      >
        ALVIS
      </Navigation>
      <Wrapper>Hello</Wrapper>
    </>
  )
}

export default App
