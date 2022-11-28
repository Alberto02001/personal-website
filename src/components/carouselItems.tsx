import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselItems = (props) =>{


    return (
        <>
            <div className="overlay">
                <img
                    className="d-block w-100"
                    src={props.img}
                    alt={props.alt}
                />
            </div>
            <Carousel.Caption className="itemsContainer d-flex flex-column align-items-center align-items-md-start">
                <p className="itemsTitle">{props.title}</p>
                <p className="itemsDescription">{props.subTitle}</p>
                <hr />
                <a className="visitLink" href={props.link}>Visit website</a>
            </Carousel.Caption>
        </>
    )
}

export default CarouselItems;