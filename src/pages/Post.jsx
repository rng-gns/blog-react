import React from "react";
import data from "../data.json";
import {useParams} from "react-router-dom";
import firstSlider from "../img/Slider1.png";
import Slider from "../components/Slider";
import "./index.css"

const Post = () => {
    const { id } = useParams();
    const post = data.find(el => el._id === id);


    return (
        <>
            <Slider pic={post.image} title={""}/>
            <div className="inner-container">
                <div className="post-title">
                    <h1>{post.title}</h1>
                </div>
                <div className="page-details">
                   <div className="post-author">Автор поста: {post.author.name}</div>
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