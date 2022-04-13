import React from "react";
import "./index.css";
import Card from "../Card";
import data from "../../data.json";


const Posts= ({search, setCnt})=> {
    const cards = data.filter(el => el.title.toLowerCase().includes(search.toLowerCase()));
    setCnt(cards.length);
    return (
        <main>
           <div className="cards-container">
                {cards.map(el => <Card text={el.text} id={el._id} key={el._id} img={el.image} title={el.title} author={el.author.name} created={el.created_at} tags={el.tags}/>)}
            </div>
        </main>
    )
}
export default Posts;