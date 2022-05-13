import React, {useState} from "react";
import "./index.css";
import {mdiMagnify, mdiClose} from '@mdi/js';
import Icon from "@mdi/react";

const Search = (props) => {
    const [val, updateVal] = useState(props.text);
    const changeText = (e) => {
        updateVal(e.target.value);
        props.foo(e.target.value);
    }
    const clearText = function() {
        updateVal("");
        props.foo("");
    }
    return (
        <form>
            <input type="text" value={val} onInput={changeText} placeholder="Поиск постов"/>
            <button className="search-btn" type="button">

                <div className="search-icon" onClick={clearText}>
                <Icon path={val ? mdiClose :mdiMagnify}
                          title="Поиск"
                          size={1}
                          color="grey"
                    />
                </div>

            </button>
        </form>
    )
}

export default Search;