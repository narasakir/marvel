// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import 'utils/fonts.css'
 
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
  }

  body * {
    font-family: 'Work Sans', sans-Serif;
    font-weight: 400;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscal;
    -webkit-overflow-scrolling: touch;
  }
`;
 
export default GlobalStyle;