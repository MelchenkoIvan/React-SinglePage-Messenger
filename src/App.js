import React from 'react'
import A from './Style/CSS/App.module.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter,Route} from 'react-router-dom';


const App = (props) => {
    
    return (
        <BrowserRouter>
        <div className={A.app}>
            <Header />
            <div className={A.containier}>
                <Navbar />
                    {//<Route path="/profile" component={Profile} />
                        //<Route path="/dialogs" component={Dialogs} />
                    }


                    <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}  />} />
                
            </div>
            </div>
        </BrowserRouter>
  );
}

export default App;


