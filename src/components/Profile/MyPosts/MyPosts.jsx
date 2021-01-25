/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let post = [
    { id: 1, message: 'Its firs post', },
    { id: 2, message: 'Its 2 second post', },
    { id: 3, message: 'Its.....post number 3!' }
  ]

  let postElements = post.map(p => <Post message={p.message} />)

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
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;