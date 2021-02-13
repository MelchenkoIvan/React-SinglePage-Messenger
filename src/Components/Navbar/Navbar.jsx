import React from 'react'
import N from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

const Navbar = (props) => {
    
    let friendElements = props.state.map(friend => <Friend name={friend.name} img={friend.img} />);
    return (
        <div className={N.sidebar}>
            <nav className={N.nav}>
                <ul >
                    <li className={N.sidebar__item}><NavLink to="/Profile" activeClassName={N.active}>Profile</NavLink></li>
                    <li className={N.sidebar__item}><NavLink to="/Dialogs" activeClassName={N.active}>Messages</NavLink></li>
                    <li className={N.sidebar__item}><NavLink to="/aa" activeClassName={N.active}>News</NavLink></li>
                    <li className={N.sidebar__item}><NavLink to="/bb" activeClassName={N.active}>Music</NavLink></li>
                    <li className={`${N.sidebar__item} ${N.item}`}><NavLink to="/cc" activeClassName={N.active}>Settings</NavLink></li>
                </ul>
            </nav>
            <h3>Friends</h3>
            <div className={N.friends}>
                
                {friendElements}
                

            </div>
        </div>
        
        );
}
export default Navbar;