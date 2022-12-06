import React from "react";
import { Carousel } from "react-bootstrap";
// @ts-ignore
import CarouselItems from "./carouselItems.tsx";

const MyWork = () =>{


    return (
        <>  
            <a name="work"></a>
            <div className="d-flex flex-column align-items-center justify-content-center workTitleBox">
                <p className="mt-5 workTitle">Work</p>
                <p className="mt-1 workSubTitle">Dig into my universe</p>
            </div>
            <Carousel indicators={false} >
                <Carousel.Item>
                    <CarouselItems title="Example Web-site 1" subTitle="Example description of this website" link="" img="https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I=" alt="first-slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselItems title="Example Web-site 2" subTitle="Example description of this website" link="" img="https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I=" alt="first-slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselItems title="Example Web-site 3" subTitle="Example description of this website" link="" img="https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I=" alt="first-slide"/> 
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MyWork;