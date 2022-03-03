import React, { useState } from "react";
import Header from "./header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { NavContext } from "./utils/NavContext";
import Body from "./body/Body";
import theme from "../styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  const [closed, setClosed] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavContext.Provider value={{ closed, setClosed }}>
          <GlobalStyles />
          <Header></Header>
          <Body />
        </NavContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
