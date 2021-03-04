import { usersApi } from "../api/api"
import { udateOblectInArray } from "../utils/object-helpers"

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
                usersData: udateOblectInArray(state.usersData,action.userId,"id",{followed:true})
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: udateOblectInArray(state.usersData,action.userId,"id",{followed:false})
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

export const requestUsers = (currentPage, pageSize) => { // ThunkCreator
    return async (dispatch) => {
        dispatch(ToggleisFetching(true));
        dispatch(SetCurrentPage(currentPage));
        let response = await usersApi.getUser(currentPage, pageSize)
        dispatch(ToggleisFetching(false));
        dispatch(SetUsers(response.items));
        dispatch(SetUsersTotalCount(response.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId ,apiMethod,actionCreator) => {
    dispatch(ToggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(ToggleFollowingProgress(false, userId));
}


export const follow = (userId) => { // ThunkCreator

    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId ,usersApi.followOnUser.bind(usersApi), followSuccess)
    }

}
export const unfollow = (userId) => { // ThunkCreator
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId ,usersApi.unfollowOnUser.bind(usersApi),unfollowSuccess)
    }
}

export default usersReducer;