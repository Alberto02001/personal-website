import React from "react";
// @ts-ignore
import MyNav from "../components/myNav.tsx";
// @ts-ignore
import HeroHome from "../components/heroHome.tsx";
// @ts-ignore
import About from "../components/about.tsx";
// @ts-ignore
import MyWork from "../components/work.tsx";
// @ts-ignore
import ContactMe from "../components/contactMe.tsx";
// @ts-ignore
import MyFooter from "../components/footer.tsx";

const Home = () => {
    
    return(
        <>
        <MyNav/>
        <HeroHome/>
        <About/>
        <MyWork/>
        <ContactMe/>
        <MyFooter/>
        </>
    )
}

export default Home;