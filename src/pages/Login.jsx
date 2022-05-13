import React, {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./index.css";
import api from "../Api";
import {UserCtx} from "../components/context/UserContext";

const Login = ({login}) => {
    const [val, changeVal] = useState("");
    const [pwd, changePwd] = useState("");

    const {setUser, setToken} = useContext(UserCtx);
    const navigation= useNavigate();
    const handler = (e) => {
        e.preventDefault();
        api.login({email: val, password: pwd}).then(ans => {
            console.log(ans);
            if (ans.data) {
                setUser(ans.data._id);
                setToken(ans.token);
                navigation("/personal");
            }else {
                alert(ans.message)
            }

        });
    }


    return (
        <>
            <h1 className="text_center">Вход в личный кабинет</h1>
            <form id="page__login" onSubmit={handler}>
                <div className="form-login">
                    <label htmlFor="email">Email</label>
                    <input className="email" type="email" name="email" placeholder="email" id="email" required value={val} onInput={e => changeVal(e.target.value)}/>
                </div>
                <div className="form-login">
                    <label htmlFor="password">Пароль</label>
                    <input className="password" type="password" name="password" placeholder="Пароль" id="password" required value={pwd} onInput={e => changePwd(e.target.value)}/>
                </div>

                <button type="submit">Войти</button>

            </form>
    </>

    )
}

export default Login;