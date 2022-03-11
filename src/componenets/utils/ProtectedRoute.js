import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const verifyToken = async () => {
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

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const setAuthStatus = async () => {
      const isTokenVerified = await verifyToken();
      setAuth(isTokenVerified);
      setIsLoading(false);
    };
    setAuthStatus();
    return () => setAuth(false);
  }, []);

  if (isLoading) {
    return <div />;
  } else {
    return auth ? children : <Navigate to="/" />;
  }
};

export default PrivateRoute;
