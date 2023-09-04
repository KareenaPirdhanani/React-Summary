import React, { useState } from "react";
import Post from "../Post/Post";
import "./PostList.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

export default function PostList(props) {
  const [posts, setposts] = useState([]);
  function addPostsHandler(postdata) {
    setposts((prevState) => [...prevState, postdata]);
  }
  return (
    <>
      {props.showingModal && (
        <Modal onClose={props.onClosing}>
          <NewPost onClose={props.onClosing} onAddPosts={addPostsHandler}></NewPost>
        </Modal>
      )}
      <ul className="posts">
        <Post></Post>
      </ul>
    </>
  );
}
