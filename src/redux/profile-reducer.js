import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST'
const updateNewPost = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        { id: 1, text: 'Hi, how are you?', countLike: 23 },
        { id: 2, text: 'It is my post', countLike: 23 },
        { id: 3, text: 'I am a dracula', countLike: 23 },
        { id: 4, text: 'Yo', countLike: 12 },
        { id: 5, text: 'No , I am a drakula', countLike: 23 }
    ],
    newPostText: 'Blalalallend',
    profile: null,
    status: ""

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 6, text: state.newPostText, countLike: 0 }],
                newPostText: ""
            };

        case updateNewPost:
            return {
                ...state,
                newPostText: action.newText
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
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: updateNewPost, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
        });
}



export default profileReducer;