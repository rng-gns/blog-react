import React, {useState} from "react";
import api from "../../Api";
import "./index.css"



const CreatePost = ({showModal, closeModal}) => {
    const [val, changeVal] = useState("");
    const [text, changeText] = useState("");
    const [img, changeImg] = useState("");
    const [tag, changeTag] = useState("")




    const handler = (e) => {
        e.preventDefault();

        const tagOfStrings = tag.split(",");

        api.createPost({title: val, text: text, image: img, tags: tagOfStrings}).then(ans => {
            console.log(ans);
            closeModal()


        });
    }


    return (
        <>
        <div className={showModal ? 'modal-wrap show' : 'modal-wrap'}>
            <div className="modal-card">
                <div className="modal-header">
                    <span className="btn-close"></span>
                    <h2 className="modal-name">Создать пост</h2>
                </div>
                <div className="modal-content">
                    <form id="edit-post" onSubmit={handler}>


                            <div className="form-modal">
                                <label htmlFor="title">Заголовок поста</label>
                                <input value={val} type="text" name="title" placeholder="Заголовок поста" id="title" required onInput={e => changeVal(e.target.value)}/>
                            </div>

                            <div className="form-modal">
                                <label htmlFor="img">Добавьте картинку к посту</label>
                                <input value={img} type="text" name="img" placeholder="Ссылка на фото" id="img" onInput={e => changeImg(e.target.value)}/>

                            <div className="form-modal">
                                <label htmlFor="tag">Введите теги через запятую</label>
                                <input value={tag} type="text" name="tag" placeholder="Теги" id="tag" onInput={e => changeTag(e.target.value)}/>
                            </div>
                        </div>

                            <div className="form-modal">
                                <label htmlFor="text">Текст поста</label>
                                <textarea value={text}  name="text" placeholder="Текст поста" id="text" rows="10" required onInput={e => changeText(e.target.value)}>  </textarea>
                            </div>



                        <button className="cancel" type="button" onClick={closeModal}>Отмена</button>
                        <button type="submit">Сохранить</button>
                    </form>
        </div>
</div>
</div>
</>
)
}

export default CreatePost;