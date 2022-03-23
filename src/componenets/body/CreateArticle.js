import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useParams } from "react-router-dom";
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

export default function ArticleCreator({ draft }) {
  const navigate = useNavigate();
  const editorRef = useRef();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [initialBody, setInitialBody] = useState("");
  const [updateId, setUpdateID] = useState("");
  const [error, setError] = useState("");
  let articleId = useParams().id;

  useEffect(() => {
    const getPost = async () => {
      try {
        console.log(draft);
        console.log(
          `http://localhost:4000/api/posts/${
            draft ? "draft/" : "/"
          }${articleId}`
        );
        let data = await fetch(
          `http://localhost:4000/api/posts/${
            draft ? "draft/" : "/"
          }${articleId}`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        const response = await data.json();
        console.log(response);
        if (data.ok) {
          console.log(response.post.title);
          setTitle(response.post.title);
          setImageUrl(response.post.imageUrl);
          setInitialBody(response.post.body);
          setUpdateID(response.post.id);
        } else {
          // should navigate to error page
          throw new Error(response.error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [articleId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const fetchAction = e.nativeEvent.submitter.name;
    const htmlToString = editorRef.current.getContent();
    try {
      let data;
      if (articleId) {
        if ((draft && !fetchAction) || (!draft && fetchAction)) {
          if (!draft && fetchAction) {
            const confirm = window.confirm(
              "Are you sure you want to save this existing article as a draft? It will be unpublished and saved to your drafts."
            );
            if (!confirm) {
              return;
            }
          }
          console.log(fetchAction);
          await deleteDraft(fetchAction);
          data = await addPost(fetchAction, htmlToString);
        } else {
          data = await updatePost(fetchAction, htmlToString);
        }
      } else {
        data = await addPost(fetchAction, htmlToString);
      }
      const response = await data.json();
      if (data.ok) {
        navigate("/dashboard");
      } else {
        setError(response.error);
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async (fetchAction, body) => {
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
          postBody: body,
        }),
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDraft = async (fetchAction) => {
    try {
      console.log(fetchAction);
      console.log(
        `http://localhost:4000/api/posts${
          fetchAction ? "" : "/draft"
        }/delete/${articleId}`
      );
      let data = await fetch(
        `http://localhost:4000/api/posts${
          fetchAction ? "" : "/draft"
        }/delete/${articleId}`,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem(`token`),
          },
        }
      );
      const response = await data.json();
      if (!data.ok) {
        throw new Error(response.error);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (fetchAction, body) => {
    try {
      console.log("reach update");
      console.log(
        `http://localhost:4000/api/posts/${fetchAction}/update/${updateId}`
      );
      let data = await fetch(
        `http://localhost:4000/api/posts/${fetchAction}/update/${updateId}`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem(`token`),
          },
          body: JSON.stringify({
            title,
            imageUrl,
            postBody: body,
          }),
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
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
        initialValue={initialBody}
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
