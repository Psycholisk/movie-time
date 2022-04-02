import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { defaultTheme } from './styles/theme'

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  )
  const linkElement = screen.getByText(/Home Content/i)
  expect(linkElement).toBeInTheDocument()
})
