import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../Assets/Images/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersApi } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(
                p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChenged(p); }}>{p}</span>
                }
            )}
            <div>

            </div>
            {
                props.users.map(u => <div key={u.id} className={styles.container}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled = {props.followingInProgress.some(id => id === u.id)} 
                                onClick={() => {props.unfollow(u.id)}} className={styles.button}>Unfollow</button>
                                : <button disabled = {props.followingInProgress.some(id => id === u.id)} 
                                onClick={() => {props.follow(u.id)}} className={styles.button}>Follow</button>}

                        </div>
                    </div>
                    <div className={styles.informAboutuser}>
                        <div className={styles.NameStatus}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={styles.location}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}
export default Users;