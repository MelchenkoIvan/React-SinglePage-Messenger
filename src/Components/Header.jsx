import React from 'react'
import H from './../Style/CSS/Header.module.css';

const Header = () => {
	return (
		<header className={H.header}>
			<img className={H.header__img} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" />
		</header>
	);
}
export default Header;