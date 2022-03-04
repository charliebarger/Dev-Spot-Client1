import styled from "styled-components";
import React from "react";

const StyledInput = styled.input`
  margin-bottom: 1.5rem;
  line-height: 1.5;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  /* border: 1px solid hsla(0,0%,7%,1); */
  border: 1px solid #ced4da;
  box-shadow: black;
  box-shadow: 3px 3px 5px #dbdbdb;
  border: 1px solid hsl(0deg 1% 74%);
  transition: 0.5s;
  &:focus {
    outline: none !important;
    border-color: #86b7fe;
  }

  &&& {
    cursor: text;
  }
`;

const FormInput = ({
  placeHolder,
  name,
  id,
  type,
  required,
  maxlength,
  minlength,
  change,
  value,
}) => {
  return (
    <StyledInput
      name={name}
      id={id}
      type={type}
      placeholder={placeHolder}
      required={required}
      maxLength={maxlength}
      minLength={minlength}
      value={value}
      onChange={change}
    />
  );
};

export default FormInput;
