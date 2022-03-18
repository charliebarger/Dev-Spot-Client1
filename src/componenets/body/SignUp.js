import React, { useState, useContext, useEffect } from "react";
import StyledErrorMessage from "../utils/StyledErrorMessage";
import Form from "./Form/Form";
import FormHeader from "./Form/FormHeader";
import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import RequiredFields from "./Form/RequiredSections";
import InternalLink from "./Form/InternalLink";
import { UserContext } from "../utils/UserContext";
import SubmitButton from "./Form/SubmitButton";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);
  const registerUser = async (e) => {
    e.preventDefault();
    let answer = await fetch("http://localhost:4000/api/users/signup", {
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
    answer = await answer.json();
    console.log(answer);
    if (answer.error) {
      setError(answer.error);
    }
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
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      <SubmitButton></SubmitButton>
    </Form>
  );
};

export default SignUpForm;
