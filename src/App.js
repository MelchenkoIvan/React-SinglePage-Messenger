import React from 'react'
import A from './Style/CSS/App.module.css';
import HeaderContainer from './Components/HeaderContainer';
import { Route } from 'react-router-dom';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';



const App = (props) => {

    return (

        <div className={A.app}>
            <HeaderContainer />
            <div className={A.containier}>
                <NavbarContainer />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />

            </div>
        </div>

    );
}

export default App;


