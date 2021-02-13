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

        case ADD_POST:{
            let newPost = {
                id: 6,
                text: state.newPostText,
                countLike: 0
            };

            let stateCopy ={...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case updateNewPost:{
            let stateCopy ={...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
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