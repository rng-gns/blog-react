import React from "react";
import "./index.css"

const Login = () => {
    return (
        <>
            <h1 className="text_center">Вход в личный кабинет</h1>
            <form id="page__login">
                <div className="form">
                    <label htmlFor="email">Email</label>
                    <input className="email" type="text" name="email" placeholder="email" id="email" required/>
                </div>
                <div className="form">
                    <label htmlFor="password">Пароль</label>
                    <input className="password" type="password" name="password" placeholder="Пароль" id="password"/>
                </div>

                <button type="submit">Войти</button>

            </form>
    </>

    )
}

export default Login;