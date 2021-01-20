/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return(
        <div className={s.item}>
          <img src='https://www.designevo.com/res/templates/thumb_small/black-and-white-crown-icon.png' />
          {props.message}
          <div>
            <span> like </span>
          </div>
        </div>
    )
}

export default Post;
