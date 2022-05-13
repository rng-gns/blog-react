import React, {useContext} from "react";
import Main from "../components/Main";
import {BannerCtx} from "../components/context/BannerContext";
import BannerContainer from "../components/BannerContainer";

const Home = () => {
    const { b1,b2, b3 }= useContext(BannerCtx);
    return (
        <>
            <Main/>
            <div style={{display:"grid", gap: "20px"}}>
                <BannerContainer cards={[b1]} />
                <BannerContainer  cards={[b2, b3]} />
            </div>
        </>

    )
}

export default Home;