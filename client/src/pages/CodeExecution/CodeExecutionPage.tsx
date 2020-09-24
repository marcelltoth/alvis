import React, { useCallback } from 'react'
import CodeExecution from './CodeExecution'
import { postCodeExecution } from '../../api'

const CodeExecutionPage = () => {
  const onSubmit = useCallback((code) => {
    console.log('code', code)
    const res = postCodeExecution({ body: code })
    console.log('res', res)
  }, [])

  return <CodeExecution onSubmit={onSubmit} />
}

export default CodeExecutionPage
