import React from 'react'
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChenged, users, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
                pageSize={pageSize} onPageChenged={onPageChenged} />
            {
                users.map(u => <User user={u}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    follow={follow} />)
            }
        </div>
    )
}
export default Users;