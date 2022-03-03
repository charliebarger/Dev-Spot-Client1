import React from "react";
import Form from "./Form/Form";
import FormHeader from "./Form/FormHeader";
import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import SubmitButton from "./Form/SubmitButton";

const SignInForm = () => {
  return (
    <Form>
      <FormHeader>Sign In</FormHeader>
      <FormLabel labelFor={"email"}>Email</FormLabel>
      <FormInput name={"email"} id={"email"}></FormInput>
      <FormLabel labelFor={"password"}>Password</FormLabel>
      <FormInput name={"password"} id={"password"}></FormInput>
      <SubmitButton></SubmitButton>
    </Form>
  );
};

export default SignInForm;
