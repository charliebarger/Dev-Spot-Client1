import React from "react";
import Header from "./header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header></Header>
      </ThemeProvider>
    </>
  );
};

export default App;
