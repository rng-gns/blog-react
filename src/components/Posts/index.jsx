import React, {useState, useEffect} from "react";
import "./index.css";
import Card from "../Card";
import api from "../../Api";


const Posts= ({search, setCnt})=> {
    const [cards, updateCards]= useState([]);
    //const [posts, updatePosts] = useState(cards);

    useEffect (()=> {
        // if (!cards.length) {
        api.getPostList().then(data => {
            console.log(data);
            //updateCards(data);
            updateCards(data.filter(el => el.title.toLowerCase().includes(search.toLowerCase())));
        });
        // }

    }, []);
    //const cards = data.filter(el => el.title.toLowerCase().includes(search.toLowerCase()));
    //const cards = api.getPostList()
    //setCnt(cards.length);

    return (
        <main>
           <div className="cards-container">
                {cards.map(el => <Card text={el.text} id={el._id} key={el._id} img={el.image} title={el.title}
                                       author={el.author.name}
                                       created={el.created_at} tags={el.tags}/>)}
            </div>
        </main>
    )
}
export default Posts;