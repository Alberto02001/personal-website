import React from "react";
import {Button, Container} from "react-bootstrap";

const HeroHome = () =>{


    return (
        <>
            <Container className="bg-primary hero d-flex justify-content-center justify-content-md-start" fluid>
                <Container>
                    <div className="d-flex flex-column align-items-center align-items-lg-start">
                        <h1 className="heroTitle">
                            Hello.<br/> I'm Alberto<br/>Web Developer
                        </h1>
                        <Button variant="dark" className="my_button col-5 col-md-3 col-lg-2 mt-3"><strong>Scopri!</strong></Button>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default HeroHome;