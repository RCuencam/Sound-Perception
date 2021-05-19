import React from 'react'
import {Link,Redirect} from "react-router-dom"
import {Col} from "antd"

const CategoryListProduct = ({type,id,url,name,stock,price}) => {

    return (
        <Col key={id} xs={24} sm={24} md={12} lg={8}>
            <Link to={`/products/${type}/${id}`}>
                <div className="categorylist__container__item">
                    <div className="categorylist__container__item__image">
                        <img src={url} alt={name} />
                    </div>
                    <h1 className="categorylist__container__item__title">{name}</h1>
                    <p className="categorylist__container__item__stock">Stock: {stock}</p>
                    <h2 className="categorylist__container__item__price">S/{price}.00</h2>
                </div>
            </Link>
        </Col>
    )
}

export default CategoryListProduct
