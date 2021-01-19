import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  StateContextProvider,
  StateReducer,
  InitialState
} from 'context'
import GlobalStyle from 'utils/GlobalStyles'
import { theme } from 'utils/theme'
import { Routes } from 'routes'


const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StateContextProvider reducer={StateReducer} initialState={InitialState}>
        <Routes />
      </StateContextProvider>
    </ThemeProvider>
  </div>
)

export default App;
