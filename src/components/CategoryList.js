import React,{useState,useMemo} from 'react'
import GetListProductsByCategory from '../helpers/getListProductsByCategory'
import CategoryListProduct from './CategoryListProduct';
import {Link} from "react-router-dom"
import {Row,Spin} from "antd"
import { LoadingOutlined } from '@ant-design/icons';
import "./categoryList.css"

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />


const CategoryList = ({category}) => {

    const [isLoading,setLoading]=useState(true)
    const listProducts=GetListProductsByCategory(category,setLoading)

    return (
        <Row className="categorylist__container" gutter={[50,50]}>
            {
                isLoading ?<div style={{width:'100%',height:'600px',display:'flex',justifyContent:'center',alignItems:'center'}}><Spin tip='Cargando...' indicator={antIcon} /></div>:
                listProducts.map((item)=>(
                    <CategoryListProduct
                        type={item.type}
                        id={item.id}
                        url={item.url}
                        name={item.name}
                        stock={item.stock}
                        price={item.price}
                        key={item.id}
                    />
                ))
            }
        </Row>
    )
}

export default CategoryList
