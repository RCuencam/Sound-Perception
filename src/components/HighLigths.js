import React from 'react'
import {FiTruck} from "react-icons/fi"
import {BsChatDots} from "react-icons/bs"
import {MdCall,MdLocationOn} from "react-icons/md"
import { Row, Col } from 'antd';
import "./highlights.css"

const highLightItems=[
    {
        id:0,
        icon:<FiTruck size="3.5em" />,
        topText:'ENVÍOS A TODO EL PERÚ',
        downText:'Rápido y Seguro'
    },
    {
        id:1,
        icon:<BsChatDots size="3.5em" />,
        topText:'CHATEA',
        downText:'+51 987654321'
    },
    {
        id:2,
        icon:<MdCall size="3.5em" />,
        topText:'LLÁMANOS',
        downText:'(01) 2554355'
    },
    {
        id:3,
        icon:<MdLocationOn size="3.5em" />,
        topText:'UBÍCANOS',
        downText:'AVENIDA mariscal benavides 345 - miraflores'
    }
]
const HighLigths = () => {
    return (
        <div className="highlights">
            <Row>
                {
                    highLightItems.map((item)=>(
                        <Col xs={24 }sm={24} md={12} lg={6} key={item.id}>
                            <div className="highlights__item" key={item.id}>
                                <div className="highlights__item__icon">{item.icon}</div>
                                <div className="highlights__item__info">
                                    <h3>{item.topText}</h3>
                                    <p>{item.downText}</p>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HighLigths
