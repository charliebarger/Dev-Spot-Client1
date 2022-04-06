import React from "react";
import styled from "styled-components";

import SignInForm from "./SignIn";
import MuteBody from "./MuteBody";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage/HomePage";
import ArticleCreator from "./CreateArticle";
import Article from "./Article";
import SignUpForm from "./SignUp";
import NotFound from "./404";
import { Routes, Route, HashRouter } from "react-router-dom";
import PrivateRoute from "../utils/ProtectedRoute";
const StyledBody = styled.main`
  background: #ededed;
  padding: 2rem 1rem;
  width: 100%;
  min-height: calc(100vh - 62px);
  height: 100%;
  position: relative;
`;

const Body = () => {
  return (
    <StyledBody>
      <MuteBody />
      <Routes>
        <Route path={"/Dev-Spot-Client1/"} element={<HomePage />} />
        <Route path={"/Dev-Spot-Client1/signUp"} element={<SignUpForm />} />
        <Route path={"/Dev-Spot-Client1/signIn"} element={<SignInForm />} />
        <Route path={"/Dev-Spot-Client1/dashboard"} element={<Dashboard />} />
        <Route path={"/Dev-Spot-Client1/article/:id"} element={<Article />} />
        <Route
          path="/Dev-Spot-Client1/createArticle/edit/:id"
          element={<ArticleCreator />}
        ></Route>
        <Route
          path="/Dev-Spot-Client1/createArticle/edit/draft/:id"
          element={<ArticleCreator draft={true} />}
        ></Route>
        <Route
          path="/Dev-Spot-Client1/createArticle"
          element={
            <PrivateRoute>
              <ArticleCreator />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledBody>
  );
};

export default Body;
