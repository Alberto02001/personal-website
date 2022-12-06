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
    const [Language, setLanguage] = useState(ita);

    const handleLanguage = (langValue) => {
        langValue ? setLanguage(ita) : setLanguage(eng)
    }

    return(
        <>
        <MyNav onSelectLanguage={handleLanguage} content={Language}/>
        <HeroHome content={Language}/>       
        <About/>
        <MyWork/>
        <ContactMe/>
        <MyFooter/>
        </>
    )
}

export default Home;
