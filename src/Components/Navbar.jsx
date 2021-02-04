import React from 'react'
import N from './../Style/CSS/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={N.nav}>
            <ul className={N.sidebar}>
                <li className={N.sidebar__item}>Profile</li>
                <li className={N.sidebar__item}>Messages</li>
                <li className={N.sidebar__item}>News</li>
                <li className={N.sidebar__item}>Music</li>
                <li className={`${N.sidebar__item} ${N.item}`}>Settings</li>
            </ul>
        </nav>
        );
}
export default Navbar;