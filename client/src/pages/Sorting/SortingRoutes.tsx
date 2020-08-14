import React from 'react'
import { Route } from 'react-router-dom'

import { DraggableList, TransitionList } from '../../components'
import Sorting from './Sorting'
import { Container } from '@material-ui/core'

const SortingRoutes = () => {
  return (
    <>
      <Route exact path={['/sorting']} component={Sorting} />
      <Route
        path={['/sorting/bubble-sort']}
        render={() => (
          <Container maxWidth="xl">
            <DraggableList items={[1, 3, 2, 4]} />
            <TransitionList />
          </Container>
        )}
      />
      <Route
        path={['/sorting/selection-sort']}
        render={() => (
          <Container maxWidth="xl">
            <DraggableList items={[1, 3, 2, 4]} />
            <TransitionList />
          </Container>
        )}
      />
      <Route
        path={['/sorting/insertion-sort']}
        render={() => (
          <Container maxWidth="xl">
            <DraggableList items={[1, 3, 2, 4]} />
            <TransitionList />
          </Container>
        )}
      />
      <Route
        path={['/sorting/shell-sort']}
        render={() => (
          <Container maxWidth="xl">
            <DraggableList items={[1, 3, 2, 4]} />
            <TransitionList />
          </Container>
        )}
      />
      <Route
        path={['/sorting/merge-sort']}
        render={() => (
          <Container maxWidth="xl">
            <DraggableList items={[1, 3, 2, 4]} />
            <TransitionList />
          </Container>
        )}
      />
      <Route
        path={['/sorting/quick-sort']}
        render={() => (
          <Container maxWidth="xl">
            <DraggableList items={[1, 3, 2, 4]} />
            <TransitionList />
          </Container>
        )}
      />
    </>
  )
}

export default SortingRoutes
