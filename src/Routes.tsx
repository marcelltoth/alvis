import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, TransitionList } from './components'
import { Container } from '@material-ui/core'
import SortingRoutes from './pages/Sorting/SortingRoutes'

// <ErrorBoundary errorName="default">
const Routing = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={['/']} render={() => <>Hello</>} />
        <Route path={['/sorting', '/sorting/:id']} render={SortingRoutes} />
        <Route
          path={['/data-structures', '/data-structures/:id']}
          render={SortingRoutes}
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
