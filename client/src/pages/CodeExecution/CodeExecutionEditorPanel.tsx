import React, { Fragment, Component } from 'react'
import {
  ReflexContainer,
  ReflexElement,
  ReflexSplitter,
  ReflexHandle,
} from 'react-reflex'
import 'react-reflex/styles.css'

// import Editor from 'react-simple-code-editor'
// import Highlight, { defaultProps } from 'prism-react-renderer'
// import theme from 'prism-react-renderer/themes/nightOwl'

// const exampleCode = `
// (function someDemo() {
//   var test = "Hello World!";
//   console.log(test);
// })();

// return () => <App />;
// `

// const styles = {
//   root: {
//     boxSizing: 'border-box',
//     fontFamily: '"Dank Mono", "Fira Code", monospace',
//     ...theme.plain,
//   },
// }

// class CodeExecutionEditorPanel extends Component {
//   state = { code: exampleCode }

//   onValueChange = (code: string) => {
//     this.setState({ code })
//   }

//   highlight = (code: string) => (
//     <Highlight
//       {...defaultProps}
//       theme={theme}
//       code={code}
//       language="javascript"
//     >
//       {({ className, style, tokens, getLineProps, getTokenProps }) => (
//         <Fragment>
//           {tokens.map((line, i) => (
//             <div {...getLineProps({ line, key: i })}>
//               {line.map((token, key) => (
//                 <span {...getTokenProps({ token, key })} />
//               ))}
//             </div>
//           ))}
//         </Fragment>
//       )}
//     </Highlight>
//   )

//   render() {
//     return (
//       <Editor
//         value={this.state.code}
//         onValueChange={this.onValueChange}
//         highlight={this.highlight}
//         padding={10}
//         style={styles.root as React.CSSProperties}
//       />
//     )
//   }
// }

const CodeExecutionEditorPanel = () => {
  return (
    <ReflexContainer orientation="horizontal">
      <ReflexElement minSize={36}>
        <div className="handle">Top Pane Header</div>
        <div className="pane-content">
          <label>Top Pane</label>
        </div>
      </ReflexElement>

      <ReflexSplitter />

      <ReflexElement minSize={36}>
        <ReflexHandle className="handle">
          Bottom Pane Header: I am a draggable handle! Drag me to resize ...
        </ReflexHandle>
        <div className="pane-content">
          <label>Bottom Pane</label>
        </div>
      </ReflexElement>
    </ReflexContainer>
  )
}

export default CodeExecutionEditorPanel
