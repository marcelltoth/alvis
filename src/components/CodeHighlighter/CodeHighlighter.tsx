import React, { ReactNode } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
  code: ReactNode
}

const CodeHighlighter = ({ code }: Props) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeHighlighter
