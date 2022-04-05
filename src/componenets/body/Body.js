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
import { Routes, Route } from "react-router-dom";
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
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/signUp"} element={<SignUpForm />} />
        <Route path={"/signIn"} element={<SignInForm />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/article/:id"} element={<Article />} />
        <Route
          path="/createArticle/edit/:id"
          element={<ArticleCreator />}
        ></Route>
        <Route
          path="/createArticle/edit/draft/:id"
          element={<ArticleCreator draft={true} />}
        ></Route>
        <Route
          path="/createArticle"
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
