import React, {useEffect, useState} from "react";
import "./index.css";
import api from "../Api";
import {Link} from "react-router-dom";
import CreatePost from "../components/CreatePost";

const Personal = ({likes, updFav, updMyPosts, myPosts}) => {

    const [info, setInfo] = useState([]);
    const [name, changeName] = useState("");
    const [about, changeAbout] = useState("");

    const [showModal, changeModalShow] = useState(false);

    useEffect(() => {
        api.personal().then(data => {
            console.log(data);
            setInfo(data);
            changeAbout(data.about);
            changeName(data.name);
        })

        let user =localStorage.getItem("user");
        api.getPostList().then(data => {
            console.log(data);
            //updateCards(data);
            // updateCards(data);
            updFav(data.filter(el => el.likes.includes(user)));
            updMyPosts(data.filter(el => el.author._id === user))
        });
    }, []);

    const st = {
        backgroundImage: `url(${info.avatar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        width: "250px",
        height: "250px",
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
    const handlerModal = () => {
        changeModalShow(!showModal);
    }

    return (
        <div className="info-container">
            <h1>Личный кабинет пользователя</h1>
            <div className="avatar" style={st}></div>
            <div className="profile__links">
                <Link to="/favorites" className="personal-favorites">Избранное <span>({likes})</span></Link>
                <Link to="/my-posts" className="personal-myPosts" >Мои посты <span>({myPosts.length})</span></Link>
            </div>

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

            <div className="actions">
                <button onClick={handlerModal}>Создать пост</button>
            </div>

            <CreatePost showModal={showModal} closeModal={handlerModal}/>

        </div>

    )
}

export default Personal;