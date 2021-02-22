import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../Assets/Images/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                                ? <button onClick={() => {

                                    axios.delete(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers:{
                                                "API-KEY":"271f60c5-c9d5-4c9d-9fc9-7a9e273c6f18"
                                            }

                                    })
                                        .then((response) => {
                                            if(response.data.resultCode == 0){
                                                props.unfollow(u.id)
                                            }
                                        });
                                   

                                }} className={styles.button}>Unfollow</button>
                                : <button onClick={() => {
                                     axios.post(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers:{
                                                "API-KEY":"271f60c5-c9d5-4c9d-9fc9-7a9e273c6f18"
                                            }

                                    })
                                        .then((response) => {
                                            if(response.data.resultCode == 0){
                                                props.follow(u.id)
                                            }
                                        });
                                    

                                }} className={styles.button}>Follow</button>}

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