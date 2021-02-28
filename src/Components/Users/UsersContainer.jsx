import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  SetCurrentPage,
  ToggleFollowingProgress,
  getUsers
} from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



class UsersContainier extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChenged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};



export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    SetCurrentPage,
    ToggleFollowingProgress,
    getUsers
  })
)(UsersContainier)
