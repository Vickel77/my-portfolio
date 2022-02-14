import Header from "./components/Header";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { light, dark } from "./utils/theme";
import { useState } from "react";
import Layout from "./components/Layout";
import { MobileResizeContext } from "./context/MobileResizeContext";

const GlobalStyles = createGlobalStyle`
* {
  padding:0;
  margin:0;
}
html,
body {
  background: ${({ theme }) => theme.background};
  font-family:"Red Hat Display", sans-serif;
  color:${({ theme }) => theme.colors.primary};
  padding:0;
  margin:0;
  width: 100%;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5 {padding:0; margin:0;}
h5 {opacity:.5; font-weight:lighter;}
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <MobileResizeContext>
        <GlobalStyles />
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Layout />
      </MobileResizeContext>
    </ThemeProvider>
  );
};

export default App;
