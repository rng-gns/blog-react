import {createContext} from "react";

export const UserCtx = createContext({
    token: "",
    user: "",
    setToken: () => {},
    setUser: () => {}
});

export const UserValue = {

    user: localStorage.getItem("user") || "",
    setUser: (id)=> {
        console.log(this.user);

        localStorage.setItem("user", id);
    }
}