import React from 'react'
import { connect } from 'react-redux';
import { followAC, SetUsersAC, unfollowAC, SetCurrentPageAC, SetUsersTotalCountAC,ToggleisFetchingAC } from '../../redux/users-reduser';
import * as axios from 'axios'
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';


class UsersContainier extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChenged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        });
    }


    render() {
        return <> 
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChenged={this.onPageChenged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}

        /></>
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(SetUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(ToggleisFetchingAC(isFetching))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainier);