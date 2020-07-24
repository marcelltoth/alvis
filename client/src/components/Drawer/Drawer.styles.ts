import styled from 'styled-components'

export const DrawerModal = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 1300;
`

export const DrawerBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

export const DrawerContent = styled.div<{ orientation?: 'left' | 'right' }>`
  ${({ orientation }) => orientation || 'left'}: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${({ theme }) => theme.display.drawerNavWidth}px;
  box-sizing: border-box;
  background-color: white;
  padding: ${({ theme }) => theme.spacers.size48};
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`

export const DrawerClose = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: ${({ theme }) => theme.spacers.size48};
  top: ${({ theme }) => theme.spacers.size48};
  cursor: pointer;
  padding: 0;
  border: 0;
  & > svg {
    width: ${({ theme }) => theme.typography.fontSizes.size20};
  }
`
