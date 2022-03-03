import React from "react";
import Form from "./Form/Form";
import FormHeader from "./Form/FormHeader";
import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import RequiredFields from "./Form/RequiredSections";
import InternalLink from "./Form/InternalLink";
import SubmitButton from "./Form/SubmitButton";

const SignUpForm = () => {
  return (
    <Form>
      <FormHeader>Sign Up</FormHeader>
      <FormLabel required labelFor={"firstName"}>
        First name
      </FormLabel>
      <FormInput name={"firstName"} id={"firstName"}></FormInput>
      <FormLabel labelFor={"lastName"}>Last name</FormLabel>
      <FormInput name={"lastName"} id={"lastName"}></FormInput>
      <FormLabel required labelFor={"email"}>
        Email
      </FormLabel>
      <FormInput name={"email"} id={"email"}></FormInput>
      <FormLabel required labelFor={"password"}>
        Password
      </FormLabel>
      <FormInput name={"password"} id={"password"}></FormInput>
      <FormLabel required labelFor={"confirmPassword"}>
        Confirm Password
      </FormLabel>
      <FormInput name={"confirmPassword"} id={"confirmPassword"}></FormInput>
      <RequiredFields />
      <InternalLink>Already have an Acount? Sign In</InternalLink>
      <SubmitButton></SubmitButton>
    </Form>
  );
};

export default SignUpForm;
