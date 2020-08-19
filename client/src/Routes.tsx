import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, TransitionList } from './components'
import { Container } from '@material-ui/core'
import { CodeExecution, SortingRoutes } from './pages'

// <ErrorBoundary errorName="default">
const Routing = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={['/']} render={() => <>Hello TEST</>} />
        <Route path={['/sorting', '/sorting/:id']} component={SortingRoutes} />
        <Route path={['/code-execution']} component={CodeExecution} />
        <Route
          path={['/data-structures', '/data-structures/:id']}
          component={SortingRoutes}
        />
        <Route render={() => <>Not Found</>} />
      </Switch>
    </Router>
  )
}

{
  /* <ErrorToast /> */
}
export default Routing
