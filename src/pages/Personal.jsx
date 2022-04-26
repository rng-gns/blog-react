import React, {useEffect, useState} from "react";
import "./index.css";
import api from "../Api";

const Personal = () => {

    const [info, setInfo] = useState([]);
    const [name, changeName] = useState("");
    const [about, changeAbout] = useState("");
    useEffect(() => {
        api.personal().then(data => {
            console.log(data);
            setInfo(data);
            changeAbout(data.about);
            changeName(data.name);
        })
    }, [])
    const st = {
        backgroundImage: `url(${info.avatar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        width: "200px",
        height: "200px",
        padding: "40px calc(50% - 696px)"
    }

    const handler = (e) => {
        e.preventDefault();
        api.editProfile({name: name, about: about}).then(ans => {
            console.log(ans);
            if (ans.data) {
                alert("Данные успешно сохранены")
            } else {
                alert(ans.message)
            }

        });
    }
    return (
        <div className="info-container">
            <h1>Личный кабинет пользователя</h1>
            <div className="avatar" style={st}></div>
            <form id="info" onSubmit={handler}>

                <div className="form">
                    <label htmlFor="name">Введите Ваше имя</label>
                    <input type="text" name="name" placeholder="Имя" id="name" required value={name}
                           onInput={e => changeName(e.target.value)}/>
                </div>
                <div className="form">
                    <label htmlFor="about">Расскажите о себе</label>
                    <textarea name="about" placeholder="О себе" id="about" rows="6" required value={about}
                              onInput={e => changeAbout(e.target.value)}>
                    </textarea>
                </div>

                <button type="submit">Сохранить</button>

            </form>

        </div>

    )
}

export default Personal;