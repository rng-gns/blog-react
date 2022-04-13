import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";

const Header = ({searchText, changeText}) => {
    return (
        <header>
            <Logo/>
            <Search text={searchText} foo={changeText}/>
            <nav>
                <Link to="/login">Войти</Link>
                <Link to="/registration">Регистрация</Link>
            </nav>
        </header>
    )
}

export default Header;