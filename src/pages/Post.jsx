import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./index.css"
import api from "../Api";

const Post = () => {
    let {id} = useParams();
    console.log(id);
    const [title, setTitle] = useState("Post");
    const [post, setPost] = useState([]);
    useEffect(()=>{
        api.getSinglePost(id).then(data=>{
            console.log(data);
            setPost(data);
        })
    },[])
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
                {/*   <div className="post-author">Автор поста: {post.author.name}</div>*/}
                    <div className="post-likes">{post.likes}</div>
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