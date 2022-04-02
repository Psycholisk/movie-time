import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default.theme'

export const TestComponentWrapper = ({ children }: { children: ReactNode }): JSX.Element => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  </BrowserRouter>
)
