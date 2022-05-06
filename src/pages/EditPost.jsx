import React, {useEffect, useState} from "react";
import api from "../Api";
import {useParams} from "react-router-dom";



const EditPost = ({post, showModal, closeModal}) => {



    const handler = () => {
        api.editPost(post._id).then(ans => {
            console.log(ans);
            closeModal()
        })
    }


    return (
        <>
        <div className={showModal ? 'modal-wrap show' : 'modal-wrap'}>
            <div className="modal-card">
                <div className="modal-header">
                    <span className="btn-close"></span>
                    <h2>Создать пост</h2>
                </div>
                <div className="modal-content">
                    <form id="edit-post" onSubmit={handler}>

                        <div className="left-content">
                            <div className="form-modal">
                                <label htmlFor="title">Заголовок поста</label>
                                <input value={post.title} type="text" name="title" placeholder="Заголовок поста" id="title" required onInput={e => changeVal(e.target.value)}/>
                            </div>

                            <div className="form-modal">
                                <label htmlFor="img">Добавьте картинку к посту</label>
                                <input value={post.img} type="text" name="img" placeholder="Ссылка на фото" id="img" onInput={e => changeImg(e.target.value)}/>
                            </div>
                            <div className="form-modal">
                                <label htmlFor="tag">Введите теги через запятую</label>
                                <input value={post.tags.join(',')} type="text" name="tag" placeholder="Теги" id="tag" onInput={e => changeTag(e.target.value)}/>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="form-modal">
                                <label htmlFor="text">Текст поста</label>
                                <textarea value={post.text}  name="text" placeholder="Текст поста" id="text" required onInput={e => changeText(e.target.value)}>  </textarea>
                            </div>
                        </div>


                        <button className="cancel" type="button" onClick={closeModal}>Отмена</button>
                        <button type="submit">Сохранить изменения</button>
                    </form>
        </div>
</div>
</div>
</>
)
}

export default EditPost;