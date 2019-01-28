import React from 'react';
import './MobileNav.sass'
import NavList from '../NavList/NavList';


const MobileNav = props => {
	const MobNavCls = [ "header-mobile-nav"]

	if (props.isOpen){
		MobNavCls.push('header-mobile-nav--open')
	}

	return(
		<nav className={ MobNavCls.join(' ') }>
			<NavList/>
		</nav>
	)
}

export default MobileNav;