import React from "react";
import HeroHome from "../components/heroHome";
import About from "../components/about";
import MyWork from "../components/work";
import ContactMe from "../components/contactMe";
import MyFooter from "../components/footer";
import MyNav from "../components/myNav";

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