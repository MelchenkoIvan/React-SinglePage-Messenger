import React from 'react'
import P from './../Style/CSS/Profile.module.css';
import MyPosts from './Posts/MyPosts';

const Profile = () => {
    return (
        <div className={P.content}>
            <img className={P.content__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" />
            
            <MyPosts />

        </div>
        );
}
export default Profile;
