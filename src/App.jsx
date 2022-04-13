import React, {useState} from "react";
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

const App = () => {
    const [searchText, changeText]=useState("");
    const [searchCnt, setCnt]= useState("0")
    return (
        <div className='container'>
            <Header searchText={searchText} changeText={changeText}/>
            <nav>
                <Link to="/">Главная страница</Link>
                <Link to="/catalog">Каталог постов</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home search={searchText} setCnt={setCnt}/>} />
                <Route path="/catalog" element={<Catalog searchText={searchText} setCnt={setCnt}/>} />
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="/login" element={<Login searchText={searchText} setCnt={setCnt}/>}/>
                <Route path="/registration" element={<Registration searchText={searchText} setCnt={setCnt}/>}/>
            </Routes>

            <Footer/>
        </div>
    )
}

export default App;