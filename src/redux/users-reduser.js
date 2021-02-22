const follow = 'follow'
const unfollow = 'unfollow'
const set_users = 'setUsers'
const setCurrentPage = 'setCurrentPage'
const setTotalCount = 'setTotalCount'
const toggle_is_fetching = 'toggle_is_fetching'

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case follow:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id == action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;

                })
            }
        case unfollow:
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

        default:
            return state;
    }
}
export const Follow = (userId) => ({ type: follow, userId })
export const Unfollow = (userId) => ({ type: unfollow, userId })
export const SetUsers = (users) => ({ type: set_users, users })
export const SetCurrentPage = (currentPage) => ({ type: setCurrentPage, currentPage })
export const SetUsersTotalCount = (totalCount) => ({ type: setTotalCount, totalCount })
export const ToggleisFetching = (isFetching) => ({ type: toggle_is_fetching, isFetching })

export default usersReducer;