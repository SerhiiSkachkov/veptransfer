import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class NavList extends Component {
	render() {
    	return(
    	    <ul className="nav-list">
    	        <li>
    	        	<NavLink to="/" exact> Главная </NavLink>
    	        </li>
    	        <li>
    	        	<NavLink to="/about"> О компании </NavLink>
    	        </li>
    	        <li>
    	        	<NavLink to="/services"> Сервис  </NavLink>
    	        </li>
    	        <li>
    	        	<NavLink to="/online"> Online-Бронирование </NavLink>
    	        </li>
    	        <li>
    	        	<NavLink to="/contact"> Контакты </NavLink>
    	        </li>
    	    </ul>
    	)
    }
};
export default NavList;