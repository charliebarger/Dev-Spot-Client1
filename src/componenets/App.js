import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { NavContext } from "./utils/NavContext";
import { UserContext } from "./utils/UserContext";
import Body from "./body/Body";
import theme from "../styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  const [closed, setClosed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const authenticate = async (token) => {
      try {
        const authenticate = await fetch(
          "http://localhost:4000/api/users/protected",
          {
            method: "GET",
            mode: "cors",
            headers: {
              Authorization: token,
            },
          }
        );
        if (authenticate.ok) {
          setLoggedIn(true);
        } else {
          throw new Error();
        }
      } catch (error) {
        setLoggedIn(false);
      }
    };
    authenticate(localStorage.getItem(`token`));
  }, [setLoggedIn, loggedIn]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavContext.Provider value={{ closed, setClosed }}>
          <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
            <GlobalStyles />
            <Header></Header>
            <Body />
          </UserContext.Provider>
        </NavContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
