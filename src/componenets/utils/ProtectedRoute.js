import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const verifyToken = async () => {
  console.log("hit");
  try {
    const authenticate = await fetch(
      "http://localhost:4000/api/users/protected",
      {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: localStorage.getItem(`token`),
        },
      }
    );
    console.log(authenticate.status);
    if (authenticate.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const verifyToken = async () => {
      console.log("2");
      try {
        const authenticate = await fetch(
          "http://localhost:4000/api/users/protected",
          {
            method: "GET",
            mode: "cors",
            headers: {
              Authorization: localStorage.getItem(`token`),
            },
          }
        );
        if (authenticate.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    };

    const setAuthStatus = async () => {
      const isTokenVerified = await verifyToken();
      setAuth(isTokenVerified);
      setIsLoading(false);
    };
    setAuthStatus();
    return () => setAuth(false);
  }, []);

  if (isLoading) {
    console.log("loading1");
    return <div />;
  } else {
    console.log("done loading");
    console.log(auth);
    return auth ? children : <Navigate to="/" />;
  }
};

export default PrivateRoute;
