import { createContext } from "react";

export const MyPostsCtx = createContext({
    myPosts: [],
    setMyPosts: () => {}
});
