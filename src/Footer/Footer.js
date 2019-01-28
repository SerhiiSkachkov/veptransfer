import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import './Footer.sass';

class Footer extends Component {

    state = {
        def: "© 2017 Все права защищены ",
        mail: "nfo@viptransfer.do",
        tel: "0 800 500 00 50"
    }

    render() {
        return (
            <footer className="footer">
                <div className="wrapper">
                    <div className="footer-box">
                        <div className="footer-promo">
                            <a className="footer-logo" href="/">
                                <img src={logo} alt="logo"/>
                            </a>
                            <div className="footer-def">{this.state.def}</div>
                            <a className="footer-contact" href={`tel:+${this.state.tel}`}>{this.state.tel}</a>
                            <a className="footer-contact" href={`mailto:${this.state.mail}`}>{this.state.mail}</a>
                        </div>
                        <a className="footer-btn" href="/"></a>
                        <ul className="footer-nav">
                            <li>
                                <NavLink to="/"> Главная </NavLink>
                                <span>/</span>
                            </li>
                            <li>
                                <NavLink to="/about"> О компании </NavLink>
                                <span>/</span>
                            </li>
                            <li>
                                <NavLink to="/services"> Сервис  </NavLink>
                                <span>/</span>
                            </li>
                            <li>
                                <NavLink to="/online"> Online-Бронирование </NavLink>
                                <span>/</span>
                            </li>
                            <li>
                                <NavLink to="/contact"> Контакты </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;
