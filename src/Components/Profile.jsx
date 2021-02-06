import React from 'react'
import P from './../Style/CSS/Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={P.content}>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} />

        </div>
        );
}
export default Profile;
