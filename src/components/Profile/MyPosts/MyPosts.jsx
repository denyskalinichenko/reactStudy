/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    { id: 1, message: 'Its firs post',          likeCount:15},
    { id: 2, message: 'Its 2 second post',      likeCount:50},
    { id: 3, message: 'Its.....post number 3!', likeCount:33}
  ]

  return (
    <div className={s.mainPost}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
        <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
        <Post message={postData[2].message} likeCount={postData[2].likeCount}/>
      </div>
    </div>
  )
}

export default MyPosts;