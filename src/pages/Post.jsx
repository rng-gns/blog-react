import React from "react";
import data from "../data.json";
import {useParams} from "react-router-dom";
import firstSlider from "../img/firstSlider.png";
import Slider from "../components/Slider";

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
                   <div>Автор поста: {post.author.name}</div>
                    <div>{post.likes}</div>
                    <div>{post.tags}</div>
                    <div>Дата публикации: {post.created_at}</div>
                </div>
                <div className="post-text">
                    <p>{post.text}</p>
                </div>


            </div>





        </>
    )
}

export default Post;