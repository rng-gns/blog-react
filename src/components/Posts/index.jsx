import React, {useState, useEffect, useContext} from "react";
import "./index.css";
import Card from "../Card";
import api from "../../Api";
import {FavCtx} from "../context/FavoritesContext";


const Posts= ({search, updFav})=> {
    const [cards, updateCards]= useState([]);
    const [posts, updatePosts] = useState(cards);
    const { setFavorites } = useContext(FavCtx);
    useEffect (()=> {
        let token = localStorage.getItem("token");
        if (token){
            api.token=token;
        }
        let user =localStorage.getItem("user");


        // if (!cards.length) {
        api.getPostList().then(data => {
            //console.log(data);
            //updateCards(data);
            updateCards(data);
            updFav(data.filter(el => el.likes.includes(user)));
        });
        // }

    }, []);

    const searchPost = () => {
        api.postSearch(search.toLowerCase()).then(data => {
            console.log(data);
            updateCards(data);
        })
    }
    //const cards = data.filter(el => el.title.toLowerCase().includes(search.toLowerCase()));
    //const cards = api.getPostList()
    //setCnt(cards.length);

    return (
        <main>
           <div className="cards-container">
                {cards.map(el => <Card
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
        </main>
    )
}
export default Posts;