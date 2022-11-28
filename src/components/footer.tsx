import React from "react";

const MyFooter = () =>{


    return (
        <>
            <div className="footerContainer">
                <div className="d-flex flex-column align-items-center">
                    <hr />
                    <div className="d-flex">
                        <a href="">ABOUT</a>
                        <a href="">WORK</a>
                        <a href="">CONTACT</a>
                    </div>
                    <hr />

                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className="footerButton github"></button>
                    <button className="footerButton discord"></button>
                    <button className="footerButton linkedin"></button>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start">
                    <p className="ms-0 ms-md-3 mt-5 mt-md-0">© 2022 Alberto Soldiviero</p>
                </div>

            </div>
        </>
    )
}

export default MyFooter;