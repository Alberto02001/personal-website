import React from "react";

const About = () =>{


    return (
        <>
        <div className="blackScrollBack">
            <div className="positionScrollPage"></div>
            <div className="d-flex flex-column flex-md-row aboutBack">
                <div className="d-flex aboutBox">
                    <div className="d-flex flex-column justify-content-center">
                    <p className="aboutTitle">ABOUT</p>
                    <p className="aboutContent">I'm Alberto, a passionate freelancer bringing you programming and design from the future. I am experienced in developing web and desktop applications including full front end design. This includes brand identity, graphics and illustrations.</p>
                    </div>
                </div>
                <div className="d-flex skillsBox justify-content-end">
                    <div className="d-flex flex-column justify-content-center">
                    <p className="skillsTitle">My Skills</p>
                    <p className="skillsContent">JS</p>
                    <p className="skillsContent">Angular</p>
                    <p className="skillsContent">React</p>
                    <p className="skillsContent">Photoshop</p>
                    <p className="skillsContent">Illustrator</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default About;