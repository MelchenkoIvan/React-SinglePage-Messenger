import React from 'react'
import A from './Style/CSS/App.module.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import { Route } from 'react-router-dom';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';



const App = (props) => {

    return (

        <div className={A.app}>
            <Header />
            <div className={A.containier}>
                <NavbarContainer  />
                <Route path="/profile" render={() => <Profile />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />

            </div>
        </div>

    );
}

export default App;


