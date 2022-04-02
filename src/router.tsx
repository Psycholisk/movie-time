import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeContainer } from './containers'
import { DefaultLayout } from './layouts'

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomeContainer />} />
    </Route>
  </Routes>
)

export default MainRouter
