import React, {useContext} from "react";
import {FavCtx} from "../components/context/FavoritesContext";
import Card from "../components/Card";

export default () => {
    const {favorites}= useContext(FavCtx);

    return (
        <div>
            <h1 className="favorites">Избранное</h1>
            <div className="cards-container">
                {favorites.map(el => <Card
                    text={el.text}
                    id={el._id}
                    key={el._id}
                    img={el.image}
                    title={el.title}
                    author={el.author.name}
                    created={el.created_at}
                    tags={el.tags}
                    likes={el.likes}
                />)}
            </div>
        </div>
    )
}