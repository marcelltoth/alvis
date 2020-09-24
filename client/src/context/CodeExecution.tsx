import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'

const CodeExecutionContext = createContext<any>(undefined)
export const useCodeExecutionContext = () => useContext(CodeExecutionContext)

export const CodeExecutionProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [state, setState] = useState()

  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [setState, state]
  )

  return (
    <CodeExecutionContext.Provider value={value}>
      {children}
    </CodeExecutionContext.Provider>
  )
}
