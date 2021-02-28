import React from 'react'
import A from './Style/CSS/App.module.css';
import HeaderContainer from './Components/HeaderContainer';
import { Route, withRouter } from 'react-router-dom';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Login from './Components/Login/Login';
import { initializeApp } from "./redux/app-reduser";
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './Components/Common/Preloader/Preloader';




class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized)return <Preloader/>;
        return (

            <div className={A.app}>
                <HeaderContainer />
                <div className={A.containier}>
                    <NavbarContainer />
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />

                </div>
            </div>

        );
    }

}
const mapStateToProps = (state) => {
    return { initialized: state.app.initialized }

}

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

