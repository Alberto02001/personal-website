import React, { useState } from "react";
import HeroHome from "../components/heroHome.tsx";
import About from "../components/about.tsx";
import MyWork from "../components/work.tsx";
import ContactMe from "../components/contactMe.tsx";
import MyFooter from "../components/footer.tsx";
import MyNav from "../components/myNav.tsx";

const Home = (props) => {
    const ita = props.ita
    const eng = props.eng

    const [language, setLanguage] = useState(eng);
    
    const handleLanguage = (langValue) => {
        langValue ? setLanguage(eng) : setLanguage(ita)
    }


    return(
        <>
        <MyNav onSelectLanguage={handleLanguage} content={language.navLink}/>
        <HeroHome content={language.hero}/>       
        <About content={language.about}/>
        <MyWork content={language.myWork}/>
        <ContactMe content={language.contact}/>
        <MyFooter content={language.navLink}/>
        </>
    )
}

export default Home;
