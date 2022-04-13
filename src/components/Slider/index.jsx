import React from "react";
import "./index.css"
import {Link} from "react-router-dom";

const Slider = (props) => {
    let st = {
        backgroundImage: `url(${props.pic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff"
    };

    return (
        <Link to="/" className="about_Us">
            <div className="slider__img" style={st}>
                <h2>{props.title}</h2>
            </div>
        </Link>
    )
}

export default Slider;