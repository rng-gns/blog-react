

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
            method: "POST",
            headers: {
                "Content-Type": "Application/json"

            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }

    login(body) {
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
    personal() {
        return fetch(`${this.path}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    editProfile(body) {
        return fetch(`${this.path}/users/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }

    setPostLike(id, isLike) {
        return fetch(`${this.path}/posts/likes/${id}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }

    createPost(body) {
        return fetch(`${this.path}/posts`, {
            method: "POST",
            headers: {
                "authorization": `Bearer ${this.token}`,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }

    editPost(id, body) {
        return fetch(`${this.path}/posts/${id}`, {
            method: "PATCH",
            headers: {
                "authorization": `Bearer ${this.token}`,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }

    deletePost(id, body) {
        return fetch(`${this.path}/posts/${id}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }

    setComment(id, body) {
        return fetch(`${this.path}/posts/comments/${id}`, {
            method: "POST",
            headers: {
                "authorization": `Bearer ${this.token}`,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
    getComments(id) {
        return fetch(`${this.path}/posts/comments/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }

}

const config = {
    path: "https://api.react-learning.ru",
    token: localStorage.getItem("token")
}
const api = new Api(config);

export default api;