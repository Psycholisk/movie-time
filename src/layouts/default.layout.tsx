import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = (): JSX.Element => (
  <>
    <div>Default layout</div>
    <Outlet />
  </>
)

export default DefaultLayout
