import React from "react";

const MyFooter = () =>{


    return (
        <>
            <div className="footerContainer">
                <div className="d-flex flex-column align-items-center">
                    <hr />
                    <div className="d-flex">
                        <a href="#about">ABOUT</a>
                        <a href="#work">WORK</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                    <hr />

                </div>
                <div className="d-flex justify-content-center mt-3">
                    <a href="https://github.com/Alberto02001" className="footerButton github"></a>
                    <a href="https://discordapp.com/Alberto01/#3185" className="footerButton discord"></a>
                    <a href='https://www.linkedin.com/in/alberto-soldiviero-224914207/' className="footerButton linkedin"></a>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start">
                    <p className="ms-0 ms-md-3 mt-5 mt-md-0">© 2022 Alberto Soldiviero</p>
                </div>

            </div>
        </>
    )
}

export default MyFooter;