import React from "react";
import { useTranslation } from "react-i18next";
import { Animate } from "../animation";

const About = () =>{
    const {t} = useTranslation()

    return (
        <>
            <a id="about"></a>
            <div className="d-flex flex-column flex-md-row aboutBack">
                <div className="top-bg-element d-none d-md-block"></div>
                <div className="bottom-bg-element d-none d-md-block"></div>
                <div className="sm-bg-element d-block d-md-none"></div>
                <div className="d-flex aboutBox">
                    <div className="d-flex flex-column justify-content-center mt-4 mt-md-0">
                        <Animate.FadeIn>
                            <p className="aboutTitle">{t("about.aboutTitle")}</p>
                        </Animate.FadeIn> 
                        <Animate.FadeIn> 
                            <p className="aboutContent">{t("about.aboutDescription")}</p>
                        </Animate.FadeIn>    
                    </div>
                </div>
                <div className="d-flex skillsBox justify-content-end">
                    <div className="d-flex flex-column justify-content-center">
                        <Animate.FadeIn>
                            <p className="skillsTitle">{t("about.skillsTitle")}</p>
                        </Animate.FadeIn> 
                        {
                            // @ts-ignore
                            t("about.skills", { returnObjects: true }).map((skill, index) => <Animate.FadeUp key={index}><p className="skillsContent">{skill}</p></Animate.FadeUp>)
                        }
                        <div className="mt-5 align-self-end">
                            <Animate.FadeIn>
                                <a href={t("about.CVlink") as string}><button className="CVbutton">{t("about.CVbutton")}</button></a>
                            </Animate.FadeIn>
                        </div>
                     </div>
                </div>
            </div>
        </>
    )
}

export default About;