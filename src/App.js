import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'
import { HomePage } from 'pages'


const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </div>
)

export default App;
