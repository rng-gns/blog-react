import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import "./index.css";
import likeTrue from "../../assets/like_stroke.svg";
import likeFalse from "../../assets/like_fill.svg";
import {useNavigate} from "react-router-dom";
import {UserCtx} from "../context/UserContext";
import {FavCtx} from "../context/FavoritesContext";
import api from "../../Api";
import CreatePost from "../../pages/CreatePost";
import EditPost from "../../pages/EditPost";

const  Card= (props)=> {
    let st= {
        backgroundImage: `url(${props.img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff"
    };
    const {setFavorites}= useContext(FavCtx);
    const {user}= useContext(UserCtx)
    const [like, setLike]= useState(props.likes.includes(user));
    //console.log(props.likes.includes(user));
    const [showModal, changeModalShow] = useState(false);
    //const [updatedPost, setUpdatedPost] = useState();

    const navigate= useNavigate();
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
    const replaceHandler = (e)=> {
        navigate(`/post/${props.id}`);
    }

    const handlerModal  = e =>  {
        e.stopPropagation();
        changeModalShow(!showModal);
    }

    return(
        <div className="card" onClick={replaceHandler}>
            <div className="card__image" style={st}></div>
            <img className="card_like" src={like ? likeTrue : likeFalse} onClick={likeHandler}/>
            <div className="card__title" title={props.title}>{props.title.slice(0,32)}</div>
            <div className="card__text" title={props.text}>{props.text.slice(0,128)}</div>
            <a className="card__author">{props.author.name}</a>
            <div className="card__created">{props.created}</div>
            <div className="card__tags">{props.tags}</div>
            <Link className="read" to={{pathname: `/post/${props.id}`}}>Читать дальше</Link>

            { user === props.author._id &&
                <a className="edit-post" onClick={handlerModal}> Редактировать </a>
            }

            <EditPost post={props} showModal={showModal} closeModal={handlerModal}/>
        </div>
    )
}
export default Card;