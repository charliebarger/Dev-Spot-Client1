import React, { useState } from "react";
import Header from "./header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { NavContext } from "./header/utils/NavContext";
import theme from "../styles/theme";
const App = () => {
  const [closed, setClosed] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavContext.Provider value={{ closed, setClosed }}>
          <GlobalStyles />
          <Header></Header>
        </NavContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
