import React, { Component } from 'react';
import logo from '../logo.svg';
import HeaderHamburger from './HeaderHamburger/HeaderHamburger';
import MobileNav from './MobileNav/MobileNav';
import HeaderMainNav from './HeaderMainNav/HeaderMainNav';
import './Header.sass';

class Header extends Component {

    state = {
        menu: false
    }

    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render() {

        let hdrCls = ['header']
        if( this.state.menu) {
            hdrCls.push('header-fixed')
        }

        return (
            <header className="App-header">
                <div className={ hdrCls.join(' ') }>
                    <div className="wrapper">
                        <div className="header-box">
                            <div className="header-box-logo">
                                <a className="logo" href="https://reactjs.org">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            <HeaderMainNav/>
                            <HeaderHamburger onToggle={this.toggleMenu} isOpen={this.state.menu}/>
                            <MobileNav isOpen={this.state.menu}/>
                        </div>
                    </div>
                </div>    
            </header>
        );
    }
}

export default Header;
