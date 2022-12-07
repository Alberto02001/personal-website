import React from "react";
import { Carousel } from "react-bootstrap";
// @ts-ignore
import CarouselItems from "./carouselItems.tsx";

const MyWork = (props) =>{
    const content = props.content

    return (
        <>  
            <a name="work"></a>
            <div className="d-flex flex-column align-items-center justify-content-center workTitleBox">
                <p className="mt-5 workTitle">{content.workTitle}</p>
                <p className="mt-1 workSubTitle">{content.workDescription}</p>
            </div>
            <Carousel indicators={false} >
                {content.works.map(item =>
                    <Carousel.Item>
                        <CarouselItems title={item.title} subTitle={item.subTitle} link={item.link} linkLabel={item.linkLabel} img={item.img} imgMobile={item.imgMobile} alt={item.alt}/> 
                    </Carousel.Item>
                )}
            </Carousel>
        </>
    )
}

export default MyWork;