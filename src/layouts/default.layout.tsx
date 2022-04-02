import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const DefaultLayout = (): JSX.Element => (
  <>
    <Header />
    <Outlet />
    <div>footer</div>
  </>
)

export default DefaultLayout
