
import React, {useState, useEffect, useContext} from "react";
import Card from "../components/Card";
import {usePagination} from "../hooks";
import api from "../Api";
import {PostCtx} from "../components/context/PostContext";


const Catalog = ({updFav, updMyPosts}) => {
    const {posts, text, search} = useContext(PostCtx);
    const [cards, updateCards]= useState([]);
    const pageData = usePagination(search(posts,text), 20);
    const [page, setPage] = useState(1);

    function setPagination(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(<div
                className={(i+1) === page ? "active" : ""}
                key={i}
                onClick={() => {setPage(i+1); pageData.jump(i+1)}}
            >{i+1}</div>)
        }
        return arr;
    }

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            api.token = token;
        }
        let user = localStorage.getItem("user");
        api.getPostList().then(data => {

            updateCards(data);
            //updatePosts(data);
            updFav(data.filter(el => el.likes.includes(user)));
            updMyPosts(data.filter(el => el.author._id === user))
        });

    }, []);
    //console.log(pageData.maxPage);
    const searchDescription = function(searchCnt) {
        if(searchCnt === 0) {
            return "ничего не найдено"
        }
        let n_1 = searchCnt % 100;
        let n_2 = n_1 % 10;
        let result = `найдено ${searchCnt} постов`

        if (n_1 > 10 && n_1 < 20) {
            result = `найден ${searchCnt} пост`
        } else if (n_2 > 1 && n_2 < 5) {
            result = `найдено ${searchCnt} поста`
        } else if (n_2 === 1) {
            result = `найден ${searchCnt} пост`
        }
        return result
    }

    return (
        <>
            <h1 className="catalog">Каталог постов</h1>
            {text && <div className='search__item'>По запросу <strong>{text}</strong> {searchDescription(search(posts,text).length)} </div>}
            <div className="page-container">
                {setPagination(pageData.maxPage)}
            </div>

            <div className="cards-container">
                {pageData.current().map(el => (
                    // <Link to={"/product/" + el._id} key={el._id}>
                    // <Card key={el._id} {...el} />
                    <Card
                        text={el.text}
                        id={el._id}
                        key={el._id}
                        img={el.image}
                        title={el.title}
                        author={el.author}
                        created={el.created_at}
                        tags={el.tags}
                        likes={el.likes}
                        comments={el.comments}
                    />
                    // </Link>
                ))}
            </div>
            <div className="page-container">
                {setPagination(pageData.maxPage)}
            </div>
        </>
    )
}

export default Catalog;