import React from 'react'
import styles from './Users.module.css'


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3A4W2tBQOzSwnaTE7aQBfkX8YVfXBnSc9g&usqp=CAU', followed: true, fullName: 'Ivan', status: 'BlaBal', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3A4W2tBQOzSwnaTE7aQBfkX8YVfXBnSc9g&usqp=CAU', followed: true, fullName: 'Alona', status: 'BlaBal', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3A4W2tBQOzSwnaTE7aQBfkX8YVfXBnSc9g&usqp=CAU', followed: false, fullName: 'Nazar', status: 'BlaBal', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3A4W2tBQOzSwnaTE7aQBfkX8YVfXBnSc9g&usqp=CAU', followed: true, fullName: 'Vlad', status: 'BlaBal', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3A4W2tBQOzSwnaTE7aQBfkX8YVfXBnSc9g&usqp=CAU', followed: false, fullName: 'maks', status: 'BlaBal', location: { city: 'Minsk', country: 'Belarus' } }
            ]
        )

    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={styles.container}>
                    <div>
                        <div>
                            <img src={u.photoUrl} className={styles.usersPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }} className={styles.button}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }} className={styles.button}>Follow</button>}

                        </div>
                    </div>
                    <div className={styles.informAboutuser}>
                        <div className={styles.NameStatus}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={styles.location}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users;