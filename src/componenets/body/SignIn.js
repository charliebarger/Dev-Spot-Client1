import styled from "styled-components";
import React from "react";
import Form from "./Form/Form";
import FormHeader from "./Form/FormHeader";
import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import RequiredFields from "./Form/RequiredSections";
import InternalLink from "./Form/InternalLink";
import SubmitButton from "./Form/SubmitButton";

const StyledWrapper = styled.div`
  background: #ededed;
  padding: 2rem 1rem;
  width: 100%;
  min-height: 100%;
  height: 100%;
`;

const SignInForm = () => {
  return (
    <StyledWrapper>
      <Form>
        <FormHeader>Sign In</FormHeader>
        <FormLabel labelFor={"email"}>Email</FormLabel>
        <FormInput name={"email"} id={"email"}></FormInput>
        <FormLabel labelFor={"password"}>Password</FormLabel>
        <FormInput name={"password"} id={"password"}></FormInput>
        <SubmitButton></SubmitButton>
      </Form>
    </StyledWrapper>
  );
};

export default SignInForm;
