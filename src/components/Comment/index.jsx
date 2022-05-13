import React, {useState} from "react";
import "./index.css"



const Comment = (props) => {
    let st= {
        backgroundImage: `url(${props.avatar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        width: "60px",
        height: "60px",
        borderRadius: "50%"
    }

    const formatDate = function (date){
        return new Date(date).toLocaleString()
    }




    return (

        <div className="comment-container" >
            <div className="comment__avatar" style={st}></div>
            <div className="comment_detail">
                <div className="comment__author">{props.author}</div>
                <div className="comment__text">{props.text}</div>
                <div className="comment__created">{formatDate(props.created)}</div>
            </div>
        </div>

    )
}

export default Comment;