import React from "react";
import {Link} from 'react-router-dom';

import "./index.css"

const  Card= (props)=> {
    let st= {
        backgroundImage: `url(${props.img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff"
    };
    return(
        <div className="card">
            <div className="card__image" style={st}></div>
            <div className="card__title">{props.title}</div>
            <div className="card__text">{props.text}</div>
            <a className="card__author">{props.author}</a>
            <div className="card__created">{props.created}</div>
            <div className="card__tags">{props.tags}</div>
            <Link to={{pathname: `/post/${props.id}`}}>Читать дальше</Link>

        </div>
    )
}
export default Card;