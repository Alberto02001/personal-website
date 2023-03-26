import React from "react";
import HeroHome from "../components/heroHome.tsx";
import About from "../components/about.tsx";
import MyWork from "../components/work.tsx";
import ContactMe from "../components/contactMe.tsx";
import MyFooter from "../components/footer.tsx";
import MyNav from "../components/myNav.tsx";

const Home = () => {

    return(
        <>
            <div className="back">
            <MyNav/>
            <HeroHome/>     
            <div className="scrollBack">
            <About/>
            <MyWork/>
            <ContactMe/>
            <MyFooter/>
            </div>
            </div>  
        </>
    )
}

export default Home;