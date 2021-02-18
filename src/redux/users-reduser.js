const follow = 'follow'
const unfollow = 'unfollow'
const set_users = 'setUsers'
const setCurrentPage='setCurrentPage'
const setTotalCount='setTotalCount'

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount:0,
    currentPage:1

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
            return { ...state, usersData: [...action.users]}
        case setCurrentPage:
            return { ...state, currentPage: action.currentPage }
        case setTotalCount:
            return { ...state, totalUsersCount: action.totalCount }

        default:
            return state;
    }
}
export const followAC = (userId) => ({ type: follow, userId })
export const unfollowAC = (userId) => ({ type: unfollow, userId })
export const SetUsersAC = (users) => ({ type: set_users, users })
export const SetCurrentPageAC = (currentPage) => ({ type: setCurrentPage, currentPage })
export const SetUsersTotalCountAC = (totalCount) => ({ type: setTotalCount, totalCount })

export default usersReducer;