import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'utils/GlobalStyles'
import { theme } from 'utils/theme'
import { Routes } from 'routes'


const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </div>
)

export default App;
