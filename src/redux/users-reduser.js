import { usersApi } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const set_users = 'setUsers'
const setCurrentPage = 'setCurrentPage'
const setTotalCount = 'setTotalCount'
const toggle_is_fetching = 'toggle_is_fetching'
const toggle_is_following_Progress = 'toggle_is_following_Progress'

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {

                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id == action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;

                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id == action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;

                })
            }
        case set_users:
            return { ...state, usersData: [...action.users] }
        case setCurrentPage:
            return { ...state, currentPage: action.currentPage }
        case setTotalCount:
            return { ...state, totalUsersCount: action.totalCount }
        case toggle_is_fetching:
            return { ...state, isFetching: action.isFetching }
        case toggle_is_following_Progress:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
    }
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const SetUsers = (users) => ({ type: set_users, users })
export const SetCurrentPage = (currentPage) => ({ type: setCurrentPage, currentPage })
export const SetUsersTotalCount = (totalCount) => ({ type: setTotalCount, totalCount })
export const ToggleisFetching = (isFetching) => ({ type: toggle_is_fetching, isFetching })
export const ToggleFollowingProgress = (isFetching, userId) => ({ type: toggle_is_following_Progress, isFetching, userId })

export const getUsers = (currentPage, pageSize) => { // ThunkCreator
    return (dispatch) => {
        dispatch(ToggleisFetching(true));

        usersApi.getUser(currentPage, pageSize).then((response) => {
            dispatch(ToggleisFetching(false));
            dispatch(SetUsers(response.items));
            dispatch(SetUsersTotalCount(response.totalCount));
        });
    }
}

export const follow = (userId) => { // ThunkCreator

    return (dispatch) => {
        dispatch(ToggleFollowingProgress(true, userId));
        usersApi.followOnUser(userId)
            .then((response) => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(ToggleFollowingProgress(false, userId));
            });
    }

}
export const unfollow = (userId) => { // ThunkCreator
    return (dispatch) => {
        dispatch(ToggleFollowingProgress(true, userId));
        usersApi.unfollowOnUser(userId)
            .then((response) => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(ToggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;