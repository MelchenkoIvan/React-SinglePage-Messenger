const ADD_POST = 'ADD-POST'
const updateNewPost = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        { id: 1, text: 'Hi, how are you?', countLike: 23 },
        { id: 2, text: 'It is my post', countLike: 23 },
        { id: 3, text: 'I am a dracula', countLike: 23 },
        { id: 4, text: 'Yo', countLike: 12 },
        { id: 5, text: 'No , I am a drakula', countLike: 23 }
    ],
    newPostText: 'Blalalallend'

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return{
                ...state,
                postsData :[...state.postsData,{id: 6,text: state.newPostText,countLike: 0}],
                newPostText : ""
            };
        
        case updateNewPost:
            return{
                ...state,
                newPostText: action.newText
            };
            
        
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: updateNewPost,
        newText: text
    }
}

export default profileReducer;