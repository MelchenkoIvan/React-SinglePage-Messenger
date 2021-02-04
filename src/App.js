import React from 'react'
import A from './Style/CSS/App.module.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';


const App = () => {
    return (
        <div className={A.app}>
            <Header/>
            <div className={A.containier}>
                <Navbar />
                <Profile/> 
            </div>
        </div>
  );
}

export default App;


