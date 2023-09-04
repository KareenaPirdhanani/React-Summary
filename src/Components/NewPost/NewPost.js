import React, { useState } from "react";
import "./NewPost.css";

export default function NewPost(props) {
  const [enteredText, setenteredText] = useState(" ");
  const [enteredName, setenteredName] = useState(" ");

  const ChangeTextHandler = (event) => {
    setenteredText(event.target.value);
  };

  const ChangeNameHandler = (event) => {
    setenteredName(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
      text: enteredText,
      name: enteredName,
    };
    props.onAddPosts(postData);
    setenteredText("");
    setenteredName("");
    props.onClose();
  };
  return (
    <form className="form" onSubmit={SubmitHandler}>
      <p>
        <label>Text</label>
        <textarea
          row={3}
          onChange={ChangeTextHandler}
          value={enteredText}
          required
        />
      </p>
      <p>
        <label>Your Name</label>
        <input
          type="text"
          onChange={ChangeNameHandler}
          value={enteredName}
          required
        />
      </p>
      <p className="actions">
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
