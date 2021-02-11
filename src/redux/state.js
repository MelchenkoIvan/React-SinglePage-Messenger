let store = {
    _state:{
        profilePage: {
            postsData: [
                { id: 1, text: 'Hi, how are you?', countLike: 23 },
                { id: 2, text: 'It is my post', countLike: 23 },
                { id: 3, text: 'I am a dracula', countLike: 23 },
                { id: 4, text: 'Yo', countLike: 12 },
                { id: 5, text: 'No , I am a drakula', countLike: 23 }
            ],
            newPostText: 'Blalalallend'

        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Ivan' },
                { id: 2, name: 'Nazar' },
                { id: 3, name: 'Maks' },
                { id: 4, name: 'Alona' },
                { id: 5, name: 'Vlad' }
            ],
            messagesData: [
                { id: 1, text: 'hi' },
                { id: 2, text: 'BlaBlaBla' },
                { id: 3, text: 'I am a dracula' },
                { id: 4, text: 'Yo' },
                { id: 5, text: 'no , I am a drakula' }
            ]
        },
        sidebar: {
            friendData: [
                { id: 1, name: 'Ivan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' },
                { id: 2, name: 'Nazar', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' },
                { id: 3, name: 'Maks', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' },
                { id: 4, name: 'Alona', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' },
                { id: 5, name: 'Vlad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZCnk2jWHz2anmrx5hIBE9mmOPVBZmytmg&usqp=CAU' }
            ]
        }


    },
    getState() {
        return this._state;
    },
    _callSubscribier ()  {

    },
    addPost () {

        let newPost = {
            id: 6,
            text: this._state.profilePage.newPostText,
            countLike: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscribier(this._state);
    },
    updateNewPostText (newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscribier(this._state);
    },
    subscribe  (observer) {
        this._callSubscribier = observer;
    }

}

export default store;