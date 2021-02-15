const follow = 'follow'
const unfollow = 'unfollow'
const set_users = 'setUsers'

let initialState = {
    usersData: [

    ]

};

const usersReducer = (state = initialState, action) => {
    debugger
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
            return { ...state, usersData: [...state.usersData, ...action.users] }

        default:
            return state;
    }
}
export const followAC = (userId) => ({ type: follow, userId })
export const unfollowAC = (userId) => ({ type: unfollow, userId })
export const SetUsersAC = (users) => ({ type: set_users, users })

export default usersReducer;