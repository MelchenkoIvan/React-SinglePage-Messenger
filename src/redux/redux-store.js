import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reduser";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduser";
import thunkMiddlewear from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reduser";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer


});

let store = createStore(reducers, applyMiddleware(thunkMiddlewear));
window.store = store;

export default store;
//ctrl+shift+L select all
//shift+alt+f format doc