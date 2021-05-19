import React from 'react'
import {Link} from "react-router-dom"
import {Row,Col} from "antd"
import { background1, background2,background3 } from '../assets/images';
import "./category.css"

const Category = () => {
    return (
        <div className="category">
            <h1>INSTRUMENTOS</h1>
                <Row gutter={0,40} className="category__container">
                    <Col xs={24} sm={24} md={24} lg={8} className="category__container__col">
                        <Link to="/products/guitars">
                            <div className="category__container__item">
                                <img src={background1} alt="GUITARRAS" />
                                <h2>GUITARRAS</h2>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} className="category__container__col">
                        <Link to="/products/drums">
                            <div className="category__container__item">
                                <img src={background2} alt="BATERIAS" />
                                <h2>BATERIAS</h2>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} className="category__container__col">
                        <Link to="/products/keyboards">
                            <div className="category__container__item">
                                <img src={background3} alt="TECLADOS" />
                                <h2>TECLADOS</h2>
                            </div>
                        </Link>
                    </Col>
                </Row>
        </div>
    )
}

export default Category