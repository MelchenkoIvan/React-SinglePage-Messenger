import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  SetCurrentPage,
  ToggleFollowingProgress,
  requestUsers
} from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { getPageSize,getTotalUsersCount,getUsers,getCurrentPage,getIsFetching,getFollowingInProgress } from "../../redux/users-selehtors";



class UsersContainier extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChenged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChenged={this.onPageChenged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          ToggleFollowingProgress={this.props.ToggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.usersData,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};



export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    SetCurrentPage,
    ToggleFollowingProgress,
    requestUsers
  })
)(UsersContainier)
