import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { TransitionList } from '../../components'

const SortingRoutes = () => {
  return (
    <>
      <Route
        exact
        path={['/sorting']}
        render={() => <Container maxWidth="xl">sorting</Container>}
      />
      <Route
        path={['/sorting/bubble-sort']}
        render={() => (
          <Container maxWidth="xl">
            {/* <DraggableList items={count} /> */}
            <TransitionList />
          </Container>
        )}
      />
    </>
  )
}

export default SortingRoutes
