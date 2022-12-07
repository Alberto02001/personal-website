import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselItems = (props) =>{

    return (
        <>
            <div className="overlay">
                <img
                    className="d-block d-lg-none w-100"
                    src={props.imgMobile}
                    alt={props.alt}
                />
                <img
                    className="d-none d-lg-block w-100"
                    src={props.img} 
                    alt={props.alt}
                />
            </div>
            <Carousel.Caption className="itemsContainer d-flex flex-column align-items-center align-items-md-start">
                <p className="itemsTitle">{props.title}</p>
                <p className="itemsDescription">{props.subTitle}</p>
                <hr />
                <a className="visitLink" href={props.link}>{props.linkLabel}</a>
            </Carousel.Caption>
        </>
    )
}

export default CarouselItems;