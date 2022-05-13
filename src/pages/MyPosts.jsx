import React, {useContext} from "react";
import {MyPostsCtx} from "../components/context/MyPostsContext";
import Card from "../components/Card";

export default () => {
    const {myPosts}= useContext(MyPostsCtx);

    return (
        <div>
            <h1 className="MyPosts">Мои посты</h1>
            <div className="cards-container">
                {myPosts.map(el =>
                    <Card
                    text={el.text}
                    id={el._id}
                    key={el._id}
                    img={el.image}
                    title={el.title}
                    author={el.author}
                    created={el.created_at}
                    tags={el.tags}
                    likes={el.likes}
                    comments={el.comments}
                />)}
            </div>
        </div>
    )
}