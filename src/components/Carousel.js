import React from 'react'
import { Carousel } from 'antd';
import { background1, background2,background3 } from '../assets/images';
import "./carousel.css"




const CarouselComponent = () => {
    return (
        <Carousel autoplay className="cover">
            <div className="carousel_item">
                <img src={background1} alt="Guitars"/>
            </div>
            <div className="carousel_item">
                <img src={background2} alt="Drums" />
            </div>
            <div className="carousel_item">
                <img src={background3} alt="Keryboards" />
            </div>

        </Carousel>
    )
}

export default CarouselComponent
