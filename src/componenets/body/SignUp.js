import styled, { css } from "styled-components";
import React from "react";
import Button from "../Button";
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
  height: 100%;
`;

// const StyledSignUpForm = styled.form`
//   margin: auto;
//   background: white;
//   padding: 1rem;
//   max-width: 400px;
//   border-radius: 6px;
//   box-shadow: 4px 5px 19px #7a7a7a;
// `;

// const StyledInput = styled.input`
//   margin-bottom: 1.5rem;
//   cursor: text;
//   line-height: 1.5;
//   width: 100%;
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   border-radius: 4px;
//   /* border: 1px solid hsla(0,0%,7%,1); */
//   border: 1px solid #ced4da;
//   box-shadow: black;
//   box-shadow: 3px 3px 5px #dbdbdb;
//   border: 1px solid hsl(0deg 1% 74%);
//   transition: 0.5s;
//   &:focus {
//     outline: none !important;
//     border-color: #86b7fe;
//   }
// `;

// const StyledInputLabel = styled.label`
//   margin-bottom: 0.5rem;
//   display: inline-block;
//   text-transform: capitalize;
//   font-size: 1rem;

//   ${({ required }) =>
//     required &&
//     css`
//       &:after {
//         content: "*";
//         color: red;
//       }
//     `}
// `;

// const StyledSignUpHeader = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 400;
//   margin-top: 8px;
// `;

// const StyledRequiredField = styled.span`
//   &:before {
//     content: "*";
//     color: red;
//   }
// `;

// const StyledInternalLink = styled.a`
//   color: #00b7ff;
//   display: block;
//   padding: 1rem 0;
// `;

// const StyledSubmitButton = styled(Button)`
//   background: ${({ theme }) => theme.colors.logoColor};
//   color: white;

//   &:hover {
//     background: #0055cc;
//   }
// `;

const SignUpForm = () => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

export default SignUpForm;
