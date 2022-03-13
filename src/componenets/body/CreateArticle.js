import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import FormHeader from "./Form/FormHeader";
import FormInput from "./Form/FormInput";
import FormLabel from "./Form/FormLabel";
import styled from "styled-components";
export default function ArticleCreator() {
  const editorRef = useRef();
  const [title, setTitle] = useState();
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const StyledForm = styled.form`
    max-width: 800px;
    margin: auto;
    background: red;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 4px 5px 19px #7a7a7a;
    background: white;
  `;

  return (
    <StyledForm>
      <FormLabel required labelFor={"title"}>
        Title
      </FormLabel>
      <FormInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name={"title"}
        id={"title"}
        type="text"
        required
      ></FormInput>
      <FormLabel labelFor={"title"}>Image URL</FormLabel>
      <FormInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name={"title"}
        id={"title"}
        type="text"
        required
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
      {/* <button onClick={log}>Submit</button> */}
    </StyledForm>
  );
}
