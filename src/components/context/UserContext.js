import {createContext} from "react";

export const  UserCtx= createContext({
    token: "",
    user: "",
    setToken: ()=> {},
    setUser: ()=>{}
});

export const UserValue= {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYwNzJkZDBjZGQ3ZDNmZDUyZjg1ZjMiLCJpYXQiOjE2NTA0ODg4OTcsImV4cCI6MTY4MjAyNDg5N30.vbNQaQcWRd0FvC2iMYEJoocoJ6g33G1RbC9cGKctKFE",
    user: localStorage.getItem("user") || "",
    setUser: (id)=> {
        console.log(this.user);
        // this.user =id;
        localStorage.setItem("user", id);
    }
}