import React,{useEffect,useState} from 'react'
import {Row,Col} from "antd"
import {Link} from "react-router-dom"
import { Skeleton } from 'antd';
import {db} from  "../FirebaseConfig"
import { drums_top } from '../assets/images';
import "./outstanding.css"


const documentDatabase='jaPlEyfIwbOhLPrAaWpN'

const OutStanding = () => {
    
    const [data,setData]=useState({})
    const [isLoading,setLoading]=useState(true)
    useEffect(()=>
    {
        const topProduct=db.collection('data').doc(documentDatabase).get()
        .then((info_top_product)=>
        {
            setData(info_top_product.data())
            setLoading(false)
        }).catch(e=>
        {
            console.log(e);
        })

    },[])
    return (
        isLoading ? <div style={{width:'80%',margin:'0 auto'}}><Skeleton active/></div>:
        <Row justify='center' className="outstanding__container">
            <Col xs={24} sm={24} md={24} lg={12}>
                <div className="outstanding__container__img">
                    <img src={drums_top} alt="DESTACADO" />
                </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
                <div className="outstanding__container__info">
                    <h1>{data.top.name}</h1>
                    <ul>
                        {
                            data.top.features.map((features,i)=>(
                                <li key={i}><h3>- {features}</h3></li>
                            ))
                        }
                    </ul>
                    <div>
                        <h1 className="outstanding__container__info__price">S/{data.top.price}.00</h1>
                    </div>
                    <Link to={`products/${data.top.type}/${data.top.id}`}>
                        <button>COMPRAR</button>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}

export default OutStanding
