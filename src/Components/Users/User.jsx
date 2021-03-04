import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../Assets/Images/user.png'
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress,unfollow,follow}) => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }} className={styles.button}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {follow(user.id) }} className={styles.button}>Follow</button>}
                </div>
            </div>
            <div className={styles.informAboutuser}>
                <div className={styles.NameStatus}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={styles.location}>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>

        </div>
    )
}
export default User;