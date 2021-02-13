import React from 'react'
import './index.css';
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import {Provider} from 'react-redux'


let rerenderEntityTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );

}
rerenderEntityTree(store.getState());
store.subscribe(() => {
    rerenderEntityTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
