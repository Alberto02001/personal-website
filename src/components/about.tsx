import React from "react";

const About = (props) =>{
    const content = props.content

    return (
        <>
        <div className="blackScrollBack">
            <div className="positionScrollPage"></div>
            <a name="about"></a>
            <div className="d-flex flex-column flex-md-row aboutBack">
                <div className="d-flex aboutBox">
                    <div className="d-flex flex-column justify-content-center mt-4 mt-md-0">
                        <p className="aboutTitle">{content.aboutTitle}</p>
                        <p className="aboutContent">{content.aboutDescription}</p>
                    </div>
                </div>
                <div className="d-flex skillsBox justify-content-end">
                    <div className="d-flex flex-column justify-content-center">
                        <p className="skillsTitle">{content.skillsTitle}</p>
                        {content.skills.map(skill => <p className="skillsContent">{skill}</p>)}
                     </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;