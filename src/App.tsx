import React from 'react'
import styled from 'styled-components'

import MainRouter from './router'
import './App.css'

const Container = styled.div``

function App(): JSX.Element {
  return (
    <Container>
      <MainRouter />
    </Container>
  )
}

export default App
