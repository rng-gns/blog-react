import React from "react";
import "./index.css"

const Registration = () => {
    return (
        <>
            <h1 className="text_center">Зарегистрируйтесь</h1>
            <form id="page__registration">
                <div className="form">
                <label htmlFor="name">Ваше имя</label>
                <input className="name" type="text" name="name" placeholder="Имя" id="name" required/>
            </div>
                <div className="form">
                    <label htmlFor="email">Ваш Email</label>
                    <input className="email" type="text" name="email" placeholder="email" id="email" required/>
                </div>
                <div className="form">
                    <label htmlFor="password">Пароль</label>
                    <input className="password" type="password" name="password" placeholder="Пароль" id="password" required/>
                </div>

                <button type="submit">Зарегистрироваться</button>

            </form>
        </>

    )
}

export default Registration;