import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<div className={s.logoContainer}>
					<img className={s.logo} src='https://vectr.com/tmp/e60ZUIBvix/etTcf2cYW.svg?width=505.8125&height=141.00000000000006&select=a45sBUKtX&source=selection' alt='site logo'/>
					<img className={s.menu} src='https://www.pngjoy.com/pngl/41/952275_hamburger-icon-menu-icon-png-grey-hd-png.png' alt='menu'/>
				</div>
			</div>
		</header>
	)
}

export default Header;