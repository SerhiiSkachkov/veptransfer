import React from 'react';
import './HeaderHamburger.sass'


const HeaderHamburger = props => {

	const HambCls = [ "hamburger", "hamburger--spin"]

	if (props.isOpen){
		HambCls.push('is-active')
	} 
	return(
		<div className={ HambCls.join(' ')}
			onClick={ props.onToggle }>
			<div className="hamburger-box">
                <div className="hamburger-inner"></div>
            </div>
		</div>
	)
}
export default HeaderHamburger;