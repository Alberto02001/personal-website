import React from "react";
import { Carousel } from "react-bootstrap";
import { Animate } from "../animation.tsx";
import CarouselItems from "./carouselItems.tsx";

const MyWork = (props) =>{
    const content = props.content

    return (
        <>  
            <a name="work"></a>
            <div className="d-flex flex-column align-items-center justify-content-center workTitleBox">
                <Animate.FadeUp>
                <p className="mt-5 workTitle">{content.workTitle}</p>
                </Animate.FadeUp>
                <Animate.FadeUp>
                <p className="mt-1 workSubTitle">{content.workDescription}</p>
                </Animate.FadeUp>
            </div>
            <Animate.FadeIn>
            <Carousel indicators={false} interval={null} >
                {content.works.map(item =>
                    <Carousel.Item>
                        <CarouselItems title={item.title} subTitle={item.subTitle} link={item.link} linkLabel={item.linkLabel} img={item.img} imgMobile={item.imgMobile} alt={item.alt}/> 
                    </Carousel.Item>
                )}
            </Carousel>
            </Animate.FadeIn>
        </>
    )
}

export default MyWork;