
import React from "react";
import Main from "../components/Main"
import Posts from "../components/Posts";

const Catalog = ({searchText, setCnt, searchCnt}) => {
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
            <h1>Каталог постов</h1>
            {searchText && <div className='search__item'>По запросу <strong>{searchText}</strong> {searchDescription(searchCnt)} </div>}
            <Posts search={searchText} setCnt={setCnt}/>
        </>
    )
}

export default Catalog;