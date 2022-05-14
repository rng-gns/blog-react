import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import "./index.css";
import {useNavigate} from "react-router-dom";
import {UserCtx} from "../context/UserContext";
import {FavCtx} from "../context/FavoritesContext";
import api from "../../Api";
import EditPost from "../EditPost";
import {MyPostsCtx} from "../context/MyPostsContext";
import Icon from '@mdi/react'
import {mdiCommentOutline, mdiHeart, mdiHeartOutline} from '@mdi/js'

const  Card = (props)=> {
    let st = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff"
    };
    const {setFavorites}= useContext(FavCtx);
    const {setMyPosts} = useContext(MyPostsCtx);
    const {user}= useContext(UserCtx)
    const [like, setLike]= useState(props.likes.includes(user));
    const [showModal, changeModalShow] = useState(false);


    const navigate = useNavigate();
    const likeHandler = (e) => {
        e.stopPropagation();
        setLike(!like);
        // console.log(like);
        api.setPostLike(props.id, like)
            .then(ans => {
                console.log(ans);
                setFavorites(ans);
            });
    }

    const handlerDelete = (e) => {
        e.stopPropagation();

        if (confirm('Удалить пост?')){
            api.deletePost(props.id)
                .then(ans => {
                    console.log(ans);
                    navigate('/personal')
                });
        }

    }
    const replaceHandler = (e)=> {
        navigate(`/post/${props.id}`);
    }

    const handlerModal  = e =>  {
        e.stopPropagation();

        changeModalShow(!showModal);
    }

    const closeModalDown = () =>
    {
        changeModalShow(!showModal);
    }

    const renderTag = (tags) => {
        return tags.map((t) => `${t}\n`)
    }

    const formatDate = function (date){
        return new Date(date).toLocaleString()
    }

    return(
        <div className="card" >
            <div className="card__image" style={st}></div>
            <div className="card_like" onClick={likeHandler}>
                <Icon path={like ? mdiHeart : mdiHeartOutline}
                      title="Лайки"
                      size={1}
                      color="grey"
                />
                <span>{props.likes.length}</span>
            </div>
            { props.comments !== undefined &&
                <div className="comments__count">
                    <Icon path={mdiCommentOutline}
                          title="Комментарии"
                          size={1}
                          color="grey"
                    />
                    <span>{props.comments.length}</span>
                </div>
            }
            <div className="card__title" title={props.title}>{props.title.slice(0,32)}</div>
            <div className="card__text" title={props.text}>{props.text.slice(0,128)}</div>
            <a className="card__author">{props.author.name}</a>
            <div className="card__created">{formatDate(props.created)}</div>

            {props.tags !== undefined &&
                <div className="card__tags">{props.tags.map(tag => <span className="tag-item" key={tag}>{tag.trim()}</span>)}</div>
            }



            <Link className="read" to={{pathname: `/post/${props.id}`}}>Читать дальше</Link>

            { user === props.author._id &&
                <span className="edit-post" onClick={handlerModal}> Редактировать </span>
            }
            {user === props.author._id &&
                <EditPost post={props} showModal={showModal} closeModal={closeModalDown}/>
            }
            {user === props.author._id &&
                <span className="delete-post" onClick={handlerDelete}> Удалить </span>
            }
        </div>
    )
}
export default Card;