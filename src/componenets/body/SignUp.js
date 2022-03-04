import React, { useState } from "react";
import Form from "./Form/Form";
import FormHeader from "./Form/FormHeader";
import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import RequiredFields from "./Form/RequiredSections";
import InternalLink from "./Form/InternalLink";
import SubmitButton from "./Form/SubmitButton";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const answer = await fetch("http://localhost:4000/api/users/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      }),
    });
    console.log(answer);
  };

  return (
    <Form submitFunc={registerUser}>
      <FormHeader>Sign Up</FormHeader>
      <FormLabel required labelFor={"firstName"}>
        First name
      </FormLabel>
      <FormInput
        name={"firstName"}
        id={"firstName"}
        type="text"
        change={(e) => setFirstName(e.target.value)}
        value={firstName}
        required
      ></FormInput>
      <FormLabel labelFor={"lastName"}>Last name</FormLabel>
      <FormInput
        name={"lastName"}
        id={"lastName"}
        type="text"
        change={(e) => setLastName(e.target.value)}
        value={lastName}
        required
      ></FormInput>
      <FormLabel required labelFor={"email"}>
        Email
      </FormLabel>
      <FormInput
        name={"email"}
        id={"email"}
        type="email"
        change={(e) => setEmail(e.target.value)}
        value={email}
        required
      ></FormInput>
      <FormLabel required labelFor={"password"}>
        Password
      </FormLabel>
      <FormInput
        name={"password"}
        id={"password"}
        type={"password"}
        required
        change={(e) => setPassword(e.target.value)}
        value={password}
        maxlength={"20"}
        minlength={"5"}
      ></FormInput>
      <FormLabel required labelFor={"confirmPassword"}>
        Confirm Password
      </FormLabel>
      <FormInput
        name={"confirmPassword"}
        id={"confirmPassword"}
        type={"password"}
        required
        change={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        maxlength={"20"}
        minlength={"5"}
      ></FormInput>
      <RequiredFields />
      <InternalLink>Already have an Acount? Sign In</InternalLink>
      <SubmitButton></SubmitButton>
    </Form>
  );
};

export default SignUpForm;
