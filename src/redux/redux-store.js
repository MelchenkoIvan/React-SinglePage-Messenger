import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewear)));

//let store = createStore(reducers, applyMiddleware(thunkMiddlewear));
window.store = store;

export default store;
//ctrl+shift+L select all
//shift+alt+f format doc