import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import "./index.css"
import api from "../Api";
import {FavCtx} from "../components/context/FavoritesContext";
import {UserCtx} from "../components/context/UserContext";
import likeTrue from "../assets/like_stroke.svg";
import likeFalse from "../assets/like_fill.svg";

const Post = (props) => {
    let {id} = useParams();
    console.log(id);
    const [title, setTitle] = useState("Post");
    const [post, setPost] = useState([]);
    const {setFavorites} = useContext(FavCtx);
    const {user} = useContext(UserCtx)
    const [like, setLike] = useState();
    useEffect(() => {
        api.getSinglePost(id).then(data=>{
            console.log(data);
            setPost(data);
            setLike(data.likes.includes(user))
        })
    },[]);
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
    const st = {
        backgroundImage: `url(${post.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        width: "100%",
        height: "400px"
    }

    return (
        <>
           <div style={st}></div>
            <div className="inner-container">
                <div className="post-title">
                    <h1>{post.title}</h1>
                </div>
                <div className="page-details">
                    {post.author !== undefined && <div className="post-author">Автор поста: {post.author.name}</div>}
                    {post.likes !== undefined && <div className="post-like_count" >{post.likes.length}</div>}
                    {<img className="post_like_icon" src={like ? likeTrue : likeFalse} onClick={likeHandler}/>}
                    <div className="post-tags">{post.tags}</div>
                    <div className="post-created">Дата публикации: {post.created_at}</div>
                </div>
                <div className="post-text">
                    <p>{post.text}</p>
                </div>


            </div>





        </>
    )
}

export default Post;