import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            ],
            newMessageBody: "sd"
            
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
    subscribe(observer) {
        this._callSubscribier = observer;
    },

    
    
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscribier(this._state);
        
    }
   

}





export default store;