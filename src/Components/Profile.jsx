import React from 'react'
import P from './../Style/CSS/Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={P.content}>
            <ProfileInfo/>
            <MyPosts />

        </div>
        );
}
export default Profile;
