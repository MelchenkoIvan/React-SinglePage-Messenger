import React from 'react'
import { NavLink } from 'react-router-dom';
import H from './../Style/CSS/Header.module.css';

const Header = (props) => {
	return (
		<header className={H.header}>
			<img className={H.header__img} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" />

			<div className={H.loginBlock}>
				{props.isAuth 
				? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
				: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}
export default Header;