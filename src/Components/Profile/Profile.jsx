import React from 'react'
import P from '../../Style/CSS/Profile.module.css';

import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={P.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />

        </div>
    );
}
export default Profile;
