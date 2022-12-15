import React from "react";
import { Animate } from "../animation.tsx";

const About = (props) =>{
    const content = props.content

    return (
        <>
            <a name="about"></a>
            <div className="d-flex flex-column flex-md-row aboutBack">
                <div className="d-flex aboutBox">
                    <div className="d-flex flex-column justify-content-center mt-4 mt-md-0">
                        <Animate.FadeIn>
                            <p className="aboutTitle">{content.aboutTitle}</p>
                        </Animate.FadeIn> 
                        <Animate.FadeIn> 
                            <p className="aboutContent">{content.aboutDescription}</p>
                        </Animate.FadeIn>    
                    </div>
                </div>
                <div className="d-flex skillsBox justify-content-end">
                    <div className="d-flex flex-column justify-content-center">
                        <Animate.FadeIn>
                            <p className="skillsTitle">{content.skillsTitle}</p>
                        </Animate.FadeIn> 
                        {content.skills.map(skill => <Animate.FadeUp><p className="skillsContent">{skill}</p></Animate.FadeUp>)}
                        <div className="mt-5 align-self-end">
                            <Animate.FadeIn>
                                <a href={content.CVlink}><button className="CVbutton">{content.CVbutton}</button></a>
                            </Animate.FadeIn>
                        </div>
                     </div>
                </div>
            </div>
        </>
    )
}

export default About;