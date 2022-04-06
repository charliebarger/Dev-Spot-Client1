import React, { useState, useEffect, useContext } from "react";
import Form from "./Form/Form";
import FormHeader from "./Form/FormHeader";
import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import SubmitButton from "./Form/SubmitButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import StyledErrorMessage from "../utils/StyledErrorMessage";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (loggedIn) {
      navigate("/Dev-Spot-Client1/");
    }
  }, [loggedIn, navigate]);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      let data = await fetch(
        "https://gentle-wildwood-95976.herokuapp.com/api/users/login",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const response = await data.json();
      if (data.ok) {
        navigate("/Dev-Spot-Client1/");
        setLoggedIn(true);
        localStorage.setItem("token", response.token);
      } else {
        setError(response.error);
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
      navigate("/Dev-Spot-Client1/signIn");
    }
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
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      <SubmitButton></SubmitButton>
    </Form>
  );
};

export default SignInForm;
