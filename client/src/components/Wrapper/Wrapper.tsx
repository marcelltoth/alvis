import React, { ReactNode } from 'react'
import styled, { withTheme } from 'styled-components'

import { ThemeType } from '../../utils'

type Sizes = {
  small: string
  medium: string
  large: string
  extraLarge: string
}

type StyledDivType = {
  isFullHeight: boolean
  width: string
}

type Props = {
  children: ReactNode
  theme: ThemeType
  isFullHeight?: boolean
  size?: 'small' | 'medium' | 'large' | 'extraLarge'
}

const StyledDiv = styled.main`
  margin: auto;
  width: 90%;
  height: ${({ isFullHeight }: StyledDivType) =>
    isFullHeight ? '100%' : 'auto'};
  max-width: ${({ width }: StyledDivType) => width};
  position: relative;
  background: ${({ theme }) => theme.colors.background};
`

const Wrapper = ({
  size = 'extraLarge',
  children,
  theme,
  isFullHeight = true,
}: Props) => {
  const wrapperSizeMap: Sizes = {
    small: theme.wrappers.small,
    medium: theme.wrappers.medium,
    large: theme.wrappers.large,
    extraLarge: theme.wrappers.extraLarge,
  }
  return (
    <StyledDiv width={wrapperSizeMap[size]} isFullHeight={isFullHeight}>
      {children}
    </StyledDiv>
  )
}

export default withTheme(Wrapper)
