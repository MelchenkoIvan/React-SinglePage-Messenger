const ADD_POST = 'ADD-POST'
const updateNewPost = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 6,
                text: state.newPostText,
                countLike: 0
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;

        case updateNewPost:
            state.newPostText = action.newText;
            return state;

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