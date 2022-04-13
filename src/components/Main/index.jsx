import React from "react";
import "./index.css";
import Slider from "../Slider";
import firstSlider from "./../../img/firstSlider.png"

const Main= ()=> {

    return (
        <main>
          <Slider pic={firstSlider} title={"Добро пожаловать в мой блог"}/>
        </main>
    )
}
export default Main;