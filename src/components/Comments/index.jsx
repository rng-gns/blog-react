import React, {useState, useEffect} from "react";
import api from "../../Api";
import "./index.css"
import Comment from "../Comment";
import {mdiHeart, mdiHeartOutline, mdiSend} from "@mdi/js";
import Icon from "@mdi/react";


const Comments = ({id}) => {
    const [comm, updateComments]= useState([]);
    const [text, changeText] = useState("");

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            api.token = token;
        }

        api.getComments(id).then(data => {
            updateComments(data);
        });

    }, []);


    const addComment = (e) => {
        e.preventDefault();
        api.setComment(id, {text: text}).then( data => {
            changeText('');
            api.getComments(id).then(data => {
                updateComments(data);
            });
        })
    }

    return (
        <>
            <form onSubmit={addComment}>
                <label htmlFor="text">Добавьте свой комментарий</label>
                <textarea value={text} name="text" id="" cols="20" rows="5" required onInput={e => changeText(e.target.value)}></textarea>
                <button className="button__send" type="submit"><Icon path={mdiSend}
                                            title="Отправить"
                                            size={1}
                                            color="lightskyblue"
                /></button>
            </form>
            <h3>Комментарии</h3>
            <div className="comment">

                {comm.map(el =>  (
                    <Comment
                        avatar={el.author.avatar}
                        author={el.author.name}
                        about={el.author.about}
                        text={el.text}
                        created={el.created_at}
                    />
                    ))
                }
            </div>
        </>
    )
}

export default Comments;