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
        <Route path={"/dev-spot-client"} element={<HomePage />} />
        <Route path={"/dev-spot-client/signUp"} element={<SignUpForm />} />
        <Route path={"/dev-spot-client/signIn"} element={<SignInForm />} />
        <Route path={"/dev-spot-client/dashboard"} element={<Dashboard />} />
        <Route path={"/dev-spot-client/article/:id"} element={<Article />} />
        <Route
          path="/dev-spot-client/createArticle/edit/:id"
          element={<ArticleCreator />}
        ></Route>
        <Route
          path="/dev-spot-client/createArticle/edit/draft/:id"
          element={<ArticleCreator draft={true} />}
        ></Route>
        <Route
          path="/dev-spot-client/createArticle"
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
