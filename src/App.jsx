import React, {useState, useEffect} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Card from "./components/Card";
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


const App = () => {
    const [searchText, changeText] = useState("");
    const [searchCnt, setCnt] = useState(0);
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    const [favorites, updFav] = useState([]);
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
        if (obj.likes.includes(user)) {
            if (!favorites.includes(el => el._id === obj._id)) {
                updFav([...favorites,obj]);
            }
        } else {
            updFav(favorites.filter(el => el._id !== obj._id));
        }
    }
    useEffect(() => {

        api.getPostList().then(data => {
            console.log(data);
            setPosts(data);
            updateCards(data);

        });
        // Здесь подключается API
    }, [])


    return (
        <BannerCtx.Provider value={BannerValue}>
            <FavCtx.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
            <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler}}>
        <div className='container'>
            <Header searchText={searchText} changeText={changeText} />
            <nav>
                <Link to="/">Главная страница</Link>
                <Link to="/catalog">Каталог постов</Link>
                <Link to="/personal">Личный кабинет пользователя</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home search={searchText} setCnt={setCnt}/>} />
                <Route path="/catalog" element={<Catalog updFav={updFav} searchText={searchText} setCnt={setCnt} searchCnt={searchCnt} />} />
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/personal" element={<Personal
                    likes={favorites.length} updFav={updFav}
                />}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>

            <Footer/>
        </div>
            </UserCtx.Provider>
            </FavCtx.Provider>
        </BannerCtx.Provider>
    )
}

export default App;