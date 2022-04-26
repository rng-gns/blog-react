import React, {useState, useEffect} from "react";
import "./index.css";
import Slider1 from "../../img/Slider1.png"
import Slider2 from "../../img/Slider2.jpg"
import Slider3 from "../../img/Slider3.jpg"


const Slider = (props) => {
    let st1 = {
        backgroundImage: `url(${Slider1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff"
    };
    let st2 = {
        backgroundImage: `url(${Slider2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff"
    };
    let st3 = {
        backgroundImage: `url(${Slider3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff"
    };

    const img = [
        <div className="slider__img" key={Slider1} style={st1}> <h2 className="slider__title"> {props.title1}</h2></div> ,
        <div className="slider__img" key={Slider2} style={st2}> <h2 className="slider__title"> {props.title2}</h2></div>,
        <div className="slider__img" key={Slider3} style={st3}> <h2 className="slider__title">{props.title3}</h2></div>,
        ]

        const [activeIndex, setActiveIndex] = useState(2);

// Хук Effect
        useEffect(() => {
            // Запускаем интервал
            const interval = setInterval(() => {
                // Меняем состояние
                setActiveIndex((current) => {
                    // Вычисляем индекс следующего слайда, который должен вывестись
                    const res = current === img.length - 1 ? 0 : current + 1
                    // Возвращаем индекс
                    return res
                })
            }, 5000)
            // Выключаем интервал
            return () => clearInterval()
        }, [])

// Вычисляем индекс предыдущего слайда
        const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
        const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
        <div className="slider">
            {img[prevImgIndex]}
            {img[activeIndex]}
            {img[nextImgIndex]}
        </div>


    )
}

export default Slider;