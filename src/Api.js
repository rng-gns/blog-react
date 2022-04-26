import Personal from "./pages/Personal";
import Registration from "./pages/Registration";

const responseHandler = res => {
    console.log(res);
    return res.json();
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }

    getPostList() {
        return fetch(`${this.path}/posts`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }

    getSinglePost(id) {
        return fetch(`${this.path}/posts/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }

    registration(body) {
        return fetch(`${this.path}/signup`, {
            method: "post",
            headers: {
                "Content-Type": "Application/json"

            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }

    login(body) {
        return fetch(`${this.path}/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
    personal() {
        return fetch(`${this.path}/users/me`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
}

const config = {
    path: "https://api.react-learning.ru",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYwNzJkZDBjZGQ3ZDNmZDUyZjg1ZjMiLCJpYXQiOjE2NTA0ODg4OTcsImV4cCI6MTY4MjAyNDg5N30.vbNQaQcWRd0FvC2iMYEJoocoJ6g33G1RbC9cGKctKFE"
}

const api = new Api(config);

export default api;