import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";
import {UserCtx} from "../context/UserContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

const Header = ({searchText, changeText}) => {
    const {user}= useContext(UserCtx)
    const navigate = useNavigate();

    const logoutHandler = () => {
        if (confirm('Выйти?')){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate('/');
        }
    }

    return (
        <header>
            <Logo/>
            <Search text={searchText} foo={changeText}/>

            {
                user ?
                <nav>
                <span onClick={logoutHandler}>Выйти</span>
                <Link to="/personal">Личный кабинет</Link>
                </nav>
                :
                <nav>
                <Link to="/login">Войти</Link>
                <Link to="/registration">Регистрация</Link>
                </nav>
            }

        </header>
    )
}

export default Header;