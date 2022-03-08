import React, { useState } from "react";
import Form from "./Form/Form";
import FormHeader from "./Form/FormHeader";
import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import SubmitButton from "./Form/SubmitButton";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    console.log("hi");
    let user = await fetch("http://localhost:4000/api/users/logIn", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    user = await user.json();
    localStorage.setItem("token", user.token);
  };
  return (
    <Form submitFunc={registerUser}>
      <FormHeader>Sign In</FormHeader>
      <FormLabel labelFor={"email"}>Email</FormLabel>
      <FormInput
        name={"email"}
        id={"email"}
        type="email"
        change={(e) => setEmail(e.target.value)}
        value={email}
        required
      ></FormInput>
      <FormLabel labelFor={"password"}>Password</FormLabel>
      <FormInput
        name={"password"}
        id={"password"}
        type={"password"}
        required
        change={(e) => setPassword(e.target.value)}
        value={password}
      ></FormInput>
      <SubmitButton></SubmitButton>
    </Form>
  );
};

export default SignInForm;
