import React, { useRef, useState, useEffect } from "react";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import { Editor } from "@tinymce/tinymce-react";
import { useParams } from "react-router-dom";
import FormHeader from "./Form/FormHeader";
import FormInput from "./Form/FormInput";
import FormLabel from "./Form/FormLabel";
import styled from "styled-components";
import StyledErrorMessage from "../utils/StyledErrorMessage";
import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";
import editDraft from "../../assets/actions/drafts/editDraft";
import editPost from "../../assets/actions/posts/editPost";
import deleteDraft from "../../assets/actions/drafts/deleteDraft";
import createPost from "../../assets/actions/posts/createPost";
import createDraft from "../../assets/actions/drafts/createDraft";
import deletePost from "../../assets/actions/posts/deletePost";
import updatePost from "../../assets/actions/posts/updatePost";
import updateDraft from "../../assets/actions/drafts/updateDraft";

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
    //if there is an ID in the URL then get the post or draft and set state with it
    if (articleId) {
      const getPost = async () => {
        try {
          let data = draft
            ? await editDraft(articleId)
            : await editPost(articleId);
          const response = await data.json();
          if (data.ok) {
            setTitle(response.post.title);
            setImageUrl(response.post.imageUrl);
            setInitialBody(response.post.body);
            setUpdateID(response.post.id);
          } else {
            throw new Error(response.error);
          }
        } catch (error) {
          navigate("/dev-spot-client/404");
          console.log(error);
        }
      };
      getPost();
    }
  }, [articleId, draft, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const fetchAction = e.nativeEvent.submitter.name;
    const htmlToString = editorRef.current.getContent();
    try {
      let data;
      //article ID being true signifies an update
      if (articleId) {
        //Article started as published and is moved to unpublished if confirmed
        if (!draft && fetchAction === "draft") {
          if (
            window.confirm(
              "Are you sure you want to save this existing article as a draft? It will be unpublished and saved to your drafts."
            )
          ) {
            await deletePost(articleId);
            data = await createDraft(htmlToString, title, imageUrl);
          } else {
            return;
          }
          //Article starts as a draft and is being published
        } else if (draft && fetchAction !== "draft") {
          await deleteDraft(articleId);
          data = await createPost(htmlToString, title, imageUrl);
        } else {
          //Starts as draft and saved as draft
          if (fetchAction === "draft") {
            data = await updateDraft(title, htmlToString, imageUrl, updateId);
          } else {
            //Starts as published and saved as published
            data = await updatePost(title, htmlToString, imageUrl, updateId);
          }
        }
        //Creating new draft or published article
      } else {
        if (fetchAction === "draft") {
          data = await createDraft(htmlToString, title, imageUrl);
        } else {
          data = await createPost(htmlToString, title, imageUrl);
        }
      }
      const response = await data.json();
      if (data.ok) {
        navigate("/dev-spot-client/dashboard");
      } else {
        setError(response.error);
        throw new Error(response.error);
      }
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
