import React, { useState } from "react";
import {Container} from "react-bootstrap";
import { useTranslation } from "react-i18next";


const HeroHome = () =>{
    const [back, setBack] = useState(false);
    const {t} = useTranslation()

    const change = () => {
      if (window.scrollY >= 2000) setBack(true);
      else setBack(false);
    };
  
    window.addEventListener("scroll", change);

    return (
        <>  
        <Container className={`d-flex flex-column flex-md-row justify-content-center align-items-center hero ${back ? "d-none" : ""}`} fluid>
          <div className="titleContainer d-flex flex-column justify-content-center align-items-center">
            <h1 className={`heroTitle ${back ? "d-none" : ""}`}>
              {
                // @ts-ignore
                t("hero.title", { returnObjects: true }).map((name, index) => <p key={index}>{name}</p>)
              }
              </h1>
            <a href="#about" className={`heroButton align-self-center ${back ? "d-none" : ""}`}></a>
          </div>
        </Container>
        </>
    )
}

export default HeroHome;