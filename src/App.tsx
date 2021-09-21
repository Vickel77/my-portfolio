import Header from "./components/Header"

import {ThemeProvider, createGlobalStyle} from "styled-components"
import {light, dark} from "./utils/theme";
import { useState } from "react";
import Layout from "./components/Layout";


const GlobalStyles = createGlobalStyle`
* {
  padding:0;
  margin:0;
}
html,
body {
  background: ${({theme})=>theme.background};
  font-family:century gothic;
  color:${({theme})=>theme.colors.primary};
  padding:0;
  margin:0;
}

h1, h2, h3, h4, h5 {padding:0; margin:0;}
h5 {opacity:.5; font-weight:lighter;}
`

const App = ()=>{
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <GlobalStyles />
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Layout />
    </ThemeProvider>
    
  )
}

export default App;