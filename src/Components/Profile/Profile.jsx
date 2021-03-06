import React from 'react'

import P from '../../Style/CSS/Profile.module.css';

import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={P.content}>
            <ProfileInfo profile={props.profile} savePhoto={props.savePhoto} isOwner={props.isOwner}
                status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />

        </div>
    );
}
export default Profile;
