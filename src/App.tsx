import React from 'react'
import { ScrollToTop } from './components'

import MainRouter from './router'

function App(): JSX.Element {
  return (
    <ScrollToTop>
      <MainRouter />
    </ScrollToTop>
  )
}

export default App
