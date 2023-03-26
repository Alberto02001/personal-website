import React from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Animate } from "../animation.tsx";
import CarouselItems from "./carouselItems.tsx";

const MyWork = () =>{
    const {t} = useTranslation()

    return (
        <>  
            <a name="work"></a>
            <div className="d-flex flex-column align-items-center justify-content-center workTitleBox">
                <Animate.FadeUp>
                <p className="mt-5 workTitle">{t("myWork.workTitle")}</p>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <p className="mt-1 workSubTitle">{t("myWork.workDescription")}</p>
                </Animate.FadeUp>
            </div>
            <Animate.FadeIn>
            <Carousel indicators={false} interval={null} >
                {t("myWork.works", { returnObjects: true }).map((item, index) =>
                    <Carousel.Item key={index}>
                        <CarouselItems title={item.title} subTitle={item.subTitle} link={item.link} linkLabel={item.linkLabel} img={item.img} imgMobile={item.imgMobile} alt={item.alt}/> 
                    </Carousel.Item>
                )}
            </Carousel>
            </Animate.FadeIn>
        </>
    )
}

export default MyWork;