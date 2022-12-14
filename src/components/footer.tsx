import React from "react";
import { Animate } from "../animation.tsx";

const MyFooter = (props) =>{
    const content = props.content

    return (
        <>
            
            <div className="footerContainer">
                <Animate.FadeIn>
                    <div className="d-flex flex-column align-items-center">
                        <hr />
                        <div className="d-flex">
                            <a href="#about">{content.about}</a>
                            <a href="#work">{content.work}</a>
                            <a href="#contact">{content.contact}</a>
                        </div>
                        <hr />

                    </div>
                </Animate.FadeIn>
                <Animate.FadeIn>
                    <div className="d-flex justify-content-center mt-3">
                        <a href="https://github.com/Alberto02001" className="footerButton github"></a>
                        <a href="https://wa.me/+393920743299" className="footerButton whatsapp"></a>
                        <a href='https://www.linkedin.com/in/alberto-soldiviero-224914207/' className="footerButton linkedin"></a>
                    </div>
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <p className="ms-0 ms-md-3 mt-5 mt-md-0">© 2022 Alberto Soldiviero</p>
                    </div>
                </Animate.FadeIn>
            </div>            
        </>
    )
}

export default MyFooter;