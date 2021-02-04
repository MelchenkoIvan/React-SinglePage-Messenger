import React from 'react'
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="containier">
                <Navbar />
                <Profile/>
            </div>
        </div>
  );
}

export default App;


