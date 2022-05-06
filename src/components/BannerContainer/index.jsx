import React from "react";
import Banner from "../Banner";

const BannerContainer= ({size, cards})=> {
    const  st={

        display: "grid",
        gridTemplateColumns: `repeat(${cards.length}, 1fr)`,
        gap: "20px",
        padding: "40px calc(50% - 696px)",

    }
    return (
        <div style={st}>
            {cards.map(el=> <Banner data={el} size={cards.length} key={el.name} className={el.className}/>)}

        </div>
    )
}
export default BannerContainer;