import React from 'react'
import {Row,Col} from "antd"
import { brand_fender, brand_pearl, brand_yamaha } from '../assets/images'
import "./brands.css"


const Brands = () => {
    return (
        <div className="brands__container">
            <h1>NUESTRAS MARCAS</h1>
            <Row justify='center'>
                <Col xs={24} md={8} className="brands__container__item">
                    <img src={brand_yamaha} alt="YAMAHA" />
                </Col>
                <Col xs={24} md={8} className="brands__container__item">
                    <img src={brand_fender} alt="FENDER" />
                </Col>
                <Col xs={24} md={8} className="brands__container__item">
                    <img src={brand_pearl} alt="PEARL" />
                </Col>
            </Row>
        </div>
    )
}

export default Brands
