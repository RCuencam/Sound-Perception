import React,{useState,useContext,useEffect} from 'react'
import storeContext from "../context/Store/storeContext"
import { Row,Col } from 'antd';
import "./cartable.css"


const CartTable = () => {
    const {data,removeProduct}=useContext(storeContext)
    const [total,setTotal]=useState(0)
    useEffect(()=>
    {
      if(data.length>0){

        const suma=data.map((item)=>item.total).reduce((prev,next)=>
        {
          return prev+next
        })
        setTotal(suma)
      }
      else{
        setTotal(0)
      }

    })
    const handleClick=(id)=>
    {
      removeProduct(id)
    }
    return (
        <div>
            <Row justify="center" className="table">
              <Col xs={11} md={15} className="table__col">
                PRODUCTO
              </Col>
              <Col xs={1} md={3} className="table__col price">
                PRECIO
              </Col>
              <Col xs={1} md={3} className="table__col quantity">
                CANTIDAD
              </Col>
              <Col xs={11} md={3} className="table__col">
                TOTAL
              </Col>
            </Row>
            <hr/>
            {data.map((item)=>(
              <div key={item.id}>
                <Row>
                  <Col xs={11} md={15} className="table__col table__col__product">
                    <div className="table__col__product__img">
                      <img src={item.url} alt="" />
                    </div>
                    <div className="table__col__product__name">
                      <h1>{item.name}</h1>
                      <button onClick={()=>handleClick(item.id)}>Quitar</button>
                    </div>
                  </Col>
                  <Col xs={1} md={3} className="table__col price">
                    <p>S/{item.price}.00</p>
                  </Col>
                  <Col xs={1} md={3} className="table__col quantity">
                    <p>{item.quantity}</p>
                  </Col>
                  <Col xs={11} md={3} className="table__col">
                    <p>S/{item.total}.00</p> 
                  </Col>
                </Row>
                <hr/>
              </div>
            ))}
            <Row>
              <Col className="table__subtotal" xs={24}>
                Subtotal: S/{total}.00
              </Col>
            </Row>
        </div>
    )
}

export default CartTable
