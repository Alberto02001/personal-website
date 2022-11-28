import React, { useState } from "react";
import {Button, Container} from "react-bootstrap";

const HeroHome = () =>{
    const [back, setBack] = useState(false);

    const change = () => {
      if (window.scrollY >= 1000) setBack(true);
      else setBack(false);
    };
  
    window.addEventListener("scroll", change);

    return (
        <>
            <Container className={`bg-primary d-flex justify-content-center ${back ? "heroOnScroll" : "hero"}`} fluid>
                    <div className={`d-flex flex-column align-items-center justify-content-center ${back ? "d-none" : ""}`}>
                        <h1 className="heroTitle">
                            Hello.<br/> I'm Alberto<br/>Web Developer
                        </h1>
                        <Button variant="info" className="heroButton col-5 col-md-3 mt-3"><strong>Scopri!</strong></Button>
                    </div>
            </Container>
        </>
    )
}

export default HeroHome;