import React from "react";
// @ts-ignore
import MyNav from "../components/myNav.tsx";
// @ts-ignore
import HeroHome from "../components/heroHome.tsx";
// @ts-ignore
import About from "../components/about.tsx";
const Home = () => {
    
    return(
        <>
        <MyNav/>
        <HeroHome/>
        <About/>
        </>
    )
}

export default Home;