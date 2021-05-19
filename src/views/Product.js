import React,{useState,useContext,useMemo,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import {Row,Col,Spin,Badge,Button} from "antd"
import { LoadingOutlined } from '@ant-design/icons'
import getListProductsById from '../helpers/getListProductsById'
import {TiShoppingCart} from "react-icons/ti"
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons'
import StoreContext from '../context/Store/storeContext'
import uuid from 'react-uuid'
import "./product.css"

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />
const ButtonGroup = Button.Group;

const Product = () => {

    const {addProduct,data} = useContext(StoreContext)


    useEffect(()=>
    {
        return window.scrollTo(0,0)
    },[])

    const {id}=useParams()

    const [isLoading,setLoading]=useState(true)
    const [quantity,setQuantity]=useState(1)


    const product=getListProductsById(Number(id),setLoading)

    const handleDecrement=()=>
    {
        if(quantity>1)
        {
            setQuantity(quantity-1)
        }
    }

    const handleIncrement=()=>
    {
        if(quantity<product.stock)
        {
            setQuantity(quantity+1)
        }
    }
    const handleClick=()=>
    {
        const newProduct={
            ...product,
            id:uuid(),
            quantity,
            total:product.price*quantity
        }

        addProduct(newProduct)

    }

    return (
        isLoading ?<div style={{width:'100%',height:'600px',display:'flex',justifyContent:'center',alignItems:'center'}}><Spin tip='Cargando...' indicator={antIcon} /></div>:
        <div>
            <Row className="shop__container">
                <Col className="shop__container__items">
                    <div className="shop__container__items__title">
                        <h1>Carrito</h1>
                    </div>
                    <div className="shop__container__items__cart">
                        <Link to="/cart">
                            <Badge count={data.length}>
                                <TiShoppingCart size="2em"/>
                            </Badge>
                        </Link>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row justify='center' className="outstanding__container">
                <Col xs={24} sm={24} md={24} lg={14}>
                    <div className="outstanding__container__img">
                        <img src={product.url} alt={product.name} />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10}>
                    <div className="outstanding__container__info">
                        <h1>{product.name}</h1>
                        <ul>
                            {product.features.map((feature)=>(
                                <li key={feature}>
                                    - {feature}
                                </li>    
                            ))}
                        </ul>
                        <p>Stock: {product.stock}</p>
                        <p style={{margin:'0'}}>Cantidad:</p>
                        <ButtonGroup>
                            <Button className="quantity__button" onClick={handleDecrement}>
                                <MinusOutlined />
                            </Button>
                            <Button className="quantity__button">
                                {quantity}
                            </Button>
                            <Button className="quantity__button" onClick={handleIncrement}>
                                <PlusOutlined />
                            </Button>
                        </ButtonGroup>
                        <h1 style={{margin:'10px 0'}}className="outstanding__container__info__price">S/{product.price}.00</h1>
                        <Link to="/cart">
                            <button onClick={handleClick}>COMPRAR</button>    
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Product