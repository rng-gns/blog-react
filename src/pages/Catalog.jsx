
import React from "react";
import Main from "../components/Main"
import Posts from "../components/Posts";

const Catalog = ({searchText, setCnt}) => {
    return (
        <>
            <h1>Каталог постов</h1>
            {searchText && <div className='search__item'>По запросу <strong>{searchText}</strong> найдено {searchCnt} постов</div>}
            <Posts search={searchText} setCnt={setCnt}/>
        </>
    )
}

export default Catalog;