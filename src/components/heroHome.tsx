import React, { useState } from "react";
import {Container} from "react-bootstrap";

const HeroHome = (props) =>{
    const [back, setBack] = useState(false);
    const content = props.content

    const change = () => {
      if (window.scrollY >= 2000) setBack(true);
      else setBack(false);
    };
  
    window.addEventListener("scroll", change);

    return (
        <>  
        <Container className={`d-flex flex-column flex-md-row justify-content-center align-items-center hero ${back ? "d-none" : ""}`} fluid>
          <div className="titleContainer d-flex flex-column justify-content-center align-items-center">
            <h1 className={`heroTitle ${back ? "d-none" : ""}`}>{content.title.map(name => <p>{name}</p>)}</h1>
            <a href="#about" className={`heroButton align-self-center ${back ? "d-none" : ""}`}></a>
          </div>
        </Container>
        </>
    )
}

export default HeroHome;