import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { defaultTheme } from './themes/default.theme'
import store from './state/store'

export const TestComponentWrapper = ({ children }: { children: ReactNode }): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </BrowserRouter>
  </Provider>
)
