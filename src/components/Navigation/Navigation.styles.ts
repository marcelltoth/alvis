import { Flex } from '@rebass/grid'
import styled from 'styled-components'

export const NavigationBar = styled.div<{ offset: string }>`
  position: fixed;
  z-index: 10;
  top: ${({ offset }) => offset};
  width: 100%;
  min-height: ${({ theme }) => theme.spacers.size64};
  border-bottom: 1px solid ${({ theme }) => theme.colours.baseLight};
  background-color: ${({ theme }) => theme.colours.foreground};
  padding: ${({ theme }) => theme.spacers.size8};
  display: flex;
  align-items: center;
`

export const NavigationBarInner = styled(Flex)`
  width: 100%;
  max-width: ${({ theme }) => theme.wrappers.largeWrapper};
`

export const ContentPadding = styled.div`
  height: ${({ theme }) => theme.spacers.size64};
`
