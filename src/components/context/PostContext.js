import {createContext} from "react";

export const  PostCtx = createContext({
    posts: [],
    text: "",
    setText: () => {},
    setPosts: () => {},
    search: () => {}

});
