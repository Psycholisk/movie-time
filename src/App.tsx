import React from 'react'
import styled from 'styled-components'

import MainRouter from './router'
import './App.css'

const Container = styled.div`
  background: ${(props) => props.theme.colors.lightGrey};
`

function App(): JSX.Element {
  return (
    <Container>
      <MainRouter />
    </Container>
  )
}

export default App
