import React, {useState, useEffect} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login"
import Post from "./pages/Post";
import Personal from "./pages/Personal";
import Favorites from "./pages/Favorites";
import {BannerCtx, BannerValue} from "./components/context/BannerContext";
import {UserCtx, UserValue} from "./components/context/UserContext";
import {FavCtx} from "./components/context/FavoritesContext";
import api from "./Api";
import MyPosts from "./pages/MyPosts";
import {MyPostsCtx} from "./components/context/MyPostsContext";
import myPosts from "./pages/MyPosts";
import {PostCtx} from "./components/context/PostContext";


const App = () => {
    const [searchText, changeText] = useState("");
    const [searchCnt, setCnt] = useState(0);
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    const [favorites, updFav] = useState([]);
    const [myPosts, updMyPosts] = useState([]);
    const [posts, setPosts] = useState(cards);
    const [cards, updateCards]= useState([]);

    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id);
    }
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data);
    }
    const setFavorites = (obj)=> {
        console.log('setFavorites', obj)
        if (obj.likes.includes(user)) {
            if (!favorites.includes(el => el._id === obj._id)) {
                updFav([...favorites,obj]);
            }
        } else {
            updFav(favorites.filter(el => el._id !== obj._id));
        }
    }

/*    useEffect(() => {
        api.getPostList().then(data => {
            setPosts(data.sort((a, b) => {b.created_at - a.created_at}));
        });
    }, []);*/

    const searchHandler = () => {
        return posts ? posts.filter(el => el.title.toLowerCase().includes(searchText.toLowerCase())) : [];
    }


    return (
        <BannerCtx.Provider value={BannerValue}>
            <FavCtx.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
                <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler}}>
                    <MyPostsCtx.Provider value={{myPosts: myPosts}}>
                        <PostCtx.Provider value={{
                            posts: posts,
                            text: searchText,
                            setText: changeText,
                            setPosts: setPosts,
                            search: searchHandler
                        }}>
                        <div className='container'>
                            <Header searchText={searchText} changeText={changeText} />
                            <nav>
                                <Link to="/">Главная страница</Link>
                                <Link to="/catalog">Каталог постов</Link>
                                {/*<Link to="/personal">Личный кабинет пользователя</Link>*/}
                            </nav>
                            <Routes>
                                <Route path="/" element={<Home search={searchText} setCnt={setCnt}/>} />
                                <Route path="/catalog" element={<Catalog
                                    updMyPosts={updMyPosts} updFav={updFav} searchText={searchText} setCnt={setCnt} searchCnt={searchCnt}
                                />} />
                                <Route path="/post/:id" element={<Post/>}/>
                                <Route path="/login" element={<Login />}/>
                                <Route path="/registration" element={<Registration/>}/>
                                <Route path="/personal" element={<Personal
                                    likes={favorites.length} updFav={updFav} updMyPosts={updMyPosts} myPosts={myPosts}
                                />}/>
                                <Route path="/favorites" element={<Favorites/>}/>
                                <Route path="/my-posts" element={<MyPosts/>}/>
                            </Routes>
                            <Footer/>
                        </div>
                        </PostCtx.Provider>
                    </MyPostsCtx.Provider>
                </UserCtx.Provider>
            </FavCtx.Provider>
        </BannerCtx.Provider>
    )
}

export default App;