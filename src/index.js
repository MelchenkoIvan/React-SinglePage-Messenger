import React from 'react'
import './index.css';
import store from './redux/state';
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

let rerenderEntityTree = (state) => {
    
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root')
    );

}
rerenderEntityTree(store.getState());
store.subscribe(rerenderEntityTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
