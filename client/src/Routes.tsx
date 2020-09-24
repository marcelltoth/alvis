import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, TransitionList, Wrapper } from './components'
import { Container } from '@material-ui/core'
import { CodeExecutionPage, SortingRoutes } from './pages'
import { Flex } from '@rebass/grid'

const CodeExecution = React.lazy(() =>
  import('./pages/CodeExecution/CodeExecution')
)

// <ErrorBoundary errorName="default">
const Routing = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100%">
      <Router>
        <Navigation />
        <Wrapper>
          <Switch>
            <Route exact path={['/']} render={() => <>Hello TEST</>} />
            <Route
              path={['/algorithms']}
              render={() => <>Hello Algorithms</>}
            />
            <Route
              path={['/sorting', '/sorting/:id']}
              component={SortingRoutes}
            />
            <Suspense fallback={<div>Loading...</div>}>
              <Route path={['/code-execution']} component={CodeExecutionPage} />
            </Suspense>
            <Route
              path={['/data-structures', '/data-structures/:id']}
              render={() => <>Hello Data-structures</>}
            />
            <Route render={() => <>Not Found</>} />
          </Switch>
        </Wrapper>
      </Router>
    </Flex>
  )
}

{
  /* <ErrorToast /> */
}
export default Routing
