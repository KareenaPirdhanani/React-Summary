import React from "react";
import { MdPostAdd, MdMessage } from "react-icons/md";
import "./Header.css";

export default function Headers(props) {

  return (
    <header className="header">
      <h1 className="logo">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className='button' onClick={props.onCreatePost}>
          <MdPostAdd fontSize={18} /> New Post
        </button>
      </p>
    </header>
  );
}
