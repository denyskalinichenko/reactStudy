/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.post} />
    </div>
  )
}

export default Profile;