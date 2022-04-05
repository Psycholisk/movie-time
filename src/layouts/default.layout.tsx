import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const DefaultLayout = (): JSX.Element => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default DefaultLayout
