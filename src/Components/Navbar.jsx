import React from 'react'
import N from './../Style/CSS/Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={N.nav}>
            <ul className={N.sidebar}>
                <li className={N.sidebar__item}><NavLink to="/Profile" activeClassName={N.active}>Profile</NavLink></li>
                <li className={N.sidebar__item}><NavLink to="/Dialogs" activeClassName={N.active}>Messages</NavLink></li>
                <li className={N.sidebar__item}><NavLink to="/aa" activeClassName={N.active}>News</NavLink></li>
                <li className={N.sidebar__item}><NavLink to="/bb" activeClassName={N.active}>Music</NavLink></li>
                <li className={`${N.sidebar__item} ${N.item}`}><NavLink to="/cc" activeClassName={N.active}>Settings</NavLink></li>
            </ul>
        </nav>
        );
}
export default Navbar;