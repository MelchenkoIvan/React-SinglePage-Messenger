import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postsData: [
        { id: 1, text: 'Hi, how are you?', countLike: 23 },
        { id: 2, text: 'It is my post', countLike: 23 },
        { id: 3, text: 'I am a dracula', countLike: 23 },
        { id: 4, text: 'Yo', countLike: 12 },
        { id: 5, text: 'No , I am a drakula', countLike: 23 }
    ],
    profile: null,
    status: ""

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 6, text: action.newPostText, countLike: 0 }]

            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.userId)

            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };


        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletPost = (postId) => ({ type: DELETE_POST, postId })


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersApi.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}



export default profileReducer;