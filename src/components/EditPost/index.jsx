import React, {useState} from "react"
import api from "../../Api";
import "./index.css"


const EditPost = ({post, showModal, closeModal}) => {

    const [title, changeTitle] = useState(post.title);
    const [text, changeText] = useState(post.text);
    const [img, changeImg] = useState(post.img);
    const [tags, changeTag] = useState(post.tags.join(','))

    const handler = (e) => {
        e.preventDefault();

        const tagOfStrings = tags.split(',');
        const data = {title: title, text: text, image: img, tags: tagOfStrings}

        api.editPost(post.id, data).then(ans => {
            if (confirm(
                `Пост ${title} изменен. Закрыть окно редактирования?`
            )){
                closeModal()
            }

        })
    }


    return (
        <>
            <div className={showModal ? 'modal-wrap show' : 'modal-wrap'}>
                <div className="modal-card">
                    <div className="modal-header">
                        <span className="btn-close"></span>
                        <h2 className="editPost-name">Редактировать пост</h2>
                    </div>
                    <div className="modal-content">
                        <form className="edit-post" id={'edit-post_' + post._id} onSubmit={handler}>


                                <div className="form-modal">
                                    <label htmlFor="title">Заголовок поста</label>
                                    <input value={title} type="text" name="title" placeholder="Заголовок поста"
                                           id="title" required onInput={e => changeTitle(e.target.value)}/>
                                </div>

                                <div className="form-modal">
                                    <label htmlFor="img">Добавьте картинку к посту</label>
                                    <input value={img} type="text" name="img" placeholder="Ссылка на фото" id="img"
                                           onInput={e => changeImg(e.target.value)}/>
                                </div>
                                <div className="form-modal">
                                    <label htmlFor="tag">Введите теги через запятую</label>
                                    <input value={tags} type="text" name="tag" placeholder="Теги"
                                           id="tag" onInput={e => changeTag(e.target.value)}/>
                                </div>


                                <div className="form-modal">
                                    <label htmlFor="text">Текст поста</label>
                                    <textarea value={text} name="text" placeholder="Текст поста" id="text" required
                                              onInput={e => changeText(e.target.value)}>  </textarea>
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