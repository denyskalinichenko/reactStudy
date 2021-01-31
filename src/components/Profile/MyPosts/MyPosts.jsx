/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post message={p.message} />)
  let newPostElement = React.createRef();

  let addPost = ()=> {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={s.mainPost}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;