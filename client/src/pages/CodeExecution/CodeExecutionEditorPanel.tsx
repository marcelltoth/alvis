import React, { useState } from 'react'

import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps, RenderProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

const styles = {
  root: {
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain,
  },
}

const CodeExecutionEditorPanel = () => {
  const [state, setState] = useState({ code: exampleCode })

  const onValueChange = (code: string) => {
    setState({ code })
  }

  const highlight = (code: string) => (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={code}
      language="javascript"
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }: RenderProps) => (
        <>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
      )}
    </Highlight>
  )

  return (
    <Editor
      value={state.code}
      onValueChange={onValueChange}
      highlight={highlight}
      padding={10}
      style={styles.root}
    />
  )
}
export default CodeExecutionEditorPanel
