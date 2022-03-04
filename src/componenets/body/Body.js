import React from "react";
import styled from "styled-components";

import SignInForm from "./SignIn";
import MuteBody from "./MuteBody";

import HomePage from "./HomePage/HomePage";
import ArticleCreator from "./CreateArticle";
import Article from "./Article";
import SignUpForm from "./SignUp";
import { Routes, Route } from "react-router-dom";

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
        <Route path={"/article/:id"} element={<Article />} />
        <Route path={"/createArticle"} element={<ArticleCreator />} />
      </Routes>
    </StyledBody>
  );
};

export default Body;
