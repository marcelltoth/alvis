import { get, put, post, patch, del, RequestArgs } from '../api'

const codeExecutionServiceBaseURL =
  process.env.REACT_APP_CODE_EXECUTION_SERVICE_BASE_URL

type PostCodeExecution = {} & RequestArgs

export const postCodeExecution = async (props: PostCodeExecution) => {
  const response = await post({
    url: `${codeExecutionServiceBaseURL}/code-execution/execute-code`,
    ...props,
  })
  return response
}
