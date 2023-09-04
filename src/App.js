import React,{useState} from 'react';
import PostList from './Components/PostList/PostList';
import Header from './Components/Header/Header';

function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false)

  const HiddenModalHandler = () => {
    setmodalIsVisible(false);
  }

  const ShowModalHandler = () => {
    setmodalIsVisible(true);
  }

  return (
    <>
    <Header onCreatePost={ShowModalHandler}></Header>
    <PostList onClosing={HiddenModalHandler} showingModal={modalIsVisible}></PostList>
    </>
      );
}

export default App;
