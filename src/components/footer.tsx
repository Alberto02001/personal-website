import React from "react";
import { useTranslation } from "react-i18next";
import { Animate } from "../animation";

const MyFooter = () =>{
    const {t} = useTranslation()

    return (
        <>
            
            <div className="footerContainer">
                <Animate.FadeIn>
                    <div className="d-flex flex-column align-items-center">
                        <hr />
                        <div className="d-flex">
                            <a href="#about">{t("navLink.about")}</a>
                            <a href="#work">{t("navLink.work")}</a>
                            <a href="#contact">{t("navLink.contact")}</a>
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