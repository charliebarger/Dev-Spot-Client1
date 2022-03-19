import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import FormHeader from "./Form/FormHeader";
import FormInput from "./Form/FormInput";
import FormLabel from "./Form/FormLabel";
import styled from "styled-components";
import StyledErrorMessage from "../utils/StyledErrorMessage";
import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";
const StyledForm = styled.form`
  max-width: 800px;
  margin: auto;
  background: red;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 4px 5px 19px #7a7a7a;
  background: white;
`;

const SubmitButton = styled(Button)`
  margin: ${(props) => (props.error ? "0" : "1rem 0")};
  margin-top: ${(props) => (props.error ? "0" : "1rem")};
  margin-left: ${({ blue }) => (blue ? "1rem" : "0")};
  background: ${({ blue, theme }) => (blue ? theme.colors.logoColor : "black")};
  color: white;
  border: ${({ blue, theme }) => (blue ? theme.colors.logoColor : "black")}
    solid 1px;
  transition: 0.25s;
  &:hover {
    background: white;
    color: ${({ blue, theme }) => (blue ? theme.colors.logoColor : "black")};
  }
`;

const ErrorWrapper = styled.div`
  margin-top: 1.5rem;
`;

export default function ArticleCreator() {
  const navigate = useNavigate();
  const editorRef = useRef();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const addPost = async (e) => {
    const fetchAction = e.nativeEvent.submitter.name;
    e.preventDefault();
    setError(false);
    const htmlToString = editorRef.current.getContent();
    try {
      let data = await fetch(`http://localhost:4000/api/posts/${fetchAction}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem(`token`),
        },
        body: JSON.stringify({
          title,
          imageUrl,
          postBody: htmlToString,
        }),
      });
      const response = await data.json();
      console.log(response);
      if (data.ok) {
        navigate("/");
      } else {
        setError(response.error);
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledForm onSubmit={addPost}>
      <FormHeader>Create Blog Post</FormHeader>
      <FormLabel required labelFor={"title"}>
        Title
      </FormLabel>
      <FormInput
        value={title}
        change={(e) => setTitle(e.target.value)}
        name={"title"}
        id={"title"}
        type="text"
        required
      ></FormInput>
      <FormLabel labelFor={"imageUrl"}>Image URL</FormLabel>
      <FormInput
        value={imageUrl}
        change={(e) => setImageUrl(e.target.value)}
        name={"imageUrl"}
        id={"imageUrl"}
        type="imageUrl"
      ></FormInput>
      <FormLabel required labelFor={"editor"}>
        Content
      </FormLabel>
      <Editor
        id="editor"
        apiKey={process.env.REACT_APP_TINY_URI}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {error && (
        <ErrorWrapper>
          <StyledErrorMessage>{error}</StyledErrorMessage>
        </ErrorWrapper>
      )}
      <SubmitButton name="" error={error} type="submit">
        Publish
      </SubmitButton>
      <SubmitButton name="draft" blue error={error}>
        Save Draft
      </SubmitButton>
    </StyledForm>
  );
}
