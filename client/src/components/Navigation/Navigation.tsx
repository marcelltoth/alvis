import React, { ReactNode } from 'react'
import { Flex } from '@rebass/grid'

import {
  ContentPadding,
  NavigationBar,
  NavigationBarInner,
} from './Navigation.styles'

type Props = {
  children?: ReactNode
  offset?: string
  right?: ReactNode
  left?: ReactNode
}

const Navigation = ({ left, right, offset = '0', children }: Props) => (
  <nav>
    <NavigationBar offset={offset}>
      <NavigationBarInner
        id="NavigationBarInner"
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Flex>{left}</Flex>
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          {children}
        </Flex>
        <Flex>{right}</Flex>
      </NavigationBarInner>
    </NavigationBar>
    <ContentPadding />
  </nav>
)

export default Navigation
