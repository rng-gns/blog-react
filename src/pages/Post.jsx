import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import "./index.css"
import api from "../Api";
import {FavCtx} from "../components/context/FavoritesContext";
import {UserCtx} from "../components/context/UserContext";
import Comments from "../components/Comments";
import {mdiHeart, mdiHeartOutline} from '@mdi/js'
import Icon from "@mdi/react";

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

        api.setPostLike(id, like)
            .then(data => {
                const iLike = data.likes.includes(user);
                setLike(iLike)
                setPost(data)
                setFavorites(data);
            });
    }
    const st = {
        backgroundImage: `url(${post.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        width: "100%",
        height: "600px"
    }
    const formatDate = function (date){
        return new Date(date).toLocaleString()
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
                    {post.likes !== undefined && <div className="post_like_icon" onClick={likeHandler}>
                        <Icon path={like ? mdiHeart : mdiHeartOutline}
                              title="Лайки"
                              size={1}
                              color="grey"
                        />
                        <span>{post.likes.length}</span>
                    </div>}


                    {post.tags !== undefined &&
                        <div className="post-tags">{post.tags.map(tag => <span className="tag-item">{tag.trim()}</span>)}</div>
                    }

                    <div className="post-created">Дата публикации: {formatDate(post.created_at)}</div>
                </div>
                <div className="post-text">
                    <p>{post.text}</p>
                </div>
                <Comments id={id}/>


            </div>


        </>
    )
}

export default Post;