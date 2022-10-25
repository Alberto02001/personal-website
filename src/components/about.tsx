import React from "react";
import {Container} from "react-bootstrap";

const About = () =>{


    return (
        <>
            <Container className="d-flex flex-column flex-md-row aboutBack" fluid>
                <div className="d-flex flex-column aboutBox">
                    <p className="aboutTitle">ABOUT</p>
                    <p className="aboutContent">I'm Alberto, a passionate freelancer bringing you programming and design from the future. I am experienced in developing web and desktop applications including full front end design. This includes brand identity, graphics and illustrations.</p>
                </div>
                <div className="d-flex flex-column skillsBox ms-auto">
                    <p className="skillsTitle">My Skills</p>
                    <p className="skillsContent">JS</p>
                    <p className="skillsContent">Angular</p>
                    <p className="skillsContent">React</p>
                    <p className="skillsContent">Photoshop</p>
                    <p className="skillsContent">Illustrator</p>
                </div>
            </Container>
        </>
    )
}

export default About;