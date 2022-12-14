import React, { useState } from "react";
import {Container} from "react-bootstrap";

const HeroHome = (props) =>{
    const [back, setBack] = useState(false);
    const content = props.content

    const change = () => {
      if (window.scrollY >= 1000) setBack(true);
      else setBack(false);
    };
  
    window.addEventListener("scroll", change);

    return (
        <>        
        <Container className="bg-primary d-flex flex-column justify-content-center align-items-center hero" fluid>
                <h1 className={`heroTitle ${back ? "d-none" : ""}`}>{content.title.map(name => <p>{name}</p>)}</h1>
                <a href="#about" className={`heroButton align-self-center ${back ? "d-none" : ""}`}></a>
        </Container>
        <a name="home"></a>
        </>
    )
}

export default HeroHome;