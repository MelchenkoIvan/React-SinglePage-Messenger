import React from 'react'
import P from './../Style/CSS/Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={P.content}>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>

        </div>
        );
}
export default Profile;
