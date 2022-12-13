import React, { useState } from "react";
import HeroHome from "../components/heroHome.tsx";
import About from "../components/about.tsx";
import MyWork from "../components/work.tsx";
import ContactMe from "../components/contactMe.tsx";
import MyFooter from "../components/footer.tsx";
import MyNav from "../components/myNav.tsx";
import ita from '../translations/ita.json'
import eng from '../translations/eng.json'

const Home = () => {
    const [Language, setLanguage] = useState(eng);

    const handleLanguage = (langValue) => {
        langValue ? setLanguage(eng) : setLanguage(ita)
    }

    return(
        <>
        <MyNav onSelectLanguage={handleLanguage} content={Language.navLink}/>
        <HeroHome content={Language.hero}/>       
        <About content={Language.about}/>
        <MyWork content={Language.myWork}/>
        <ContactMe content={Language.contact}/>
        <MyFooter content={Language.navLink}/>
        </>
    )
}

export default Home;
