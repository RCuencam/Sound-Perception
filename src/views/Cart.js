import React,{useContext,useEffect} from 'react'
import {Link,useHistory} from "react-router-dom"
import CartTable from '../components/CartTable'
import FormLayout from '../components/ShippingInformation'
import StoreContext from '../context/Store/storeContext'
import "./cart.css"

const Cart = () => {

    const {data}=useContext(StoreContext)
    useEffect(()=>
    {
        return window.scrollTo(0,0)
    },[])
    return (
        <div className="cart__container">
            <div className="cart__container__header">
                <h1>Carrito de Compras</h1>
                <a onClick={useHistory().goBack}>Seguir Comprando</a>
            </div>
            {
                data.length===0 ?
                <h1 style={{textAlign:'center'}}>No hay productos en el carrito</h1> : 
                <div>
                    <CartTable />
                    <div className="cart__container__shipping">
                        <h1>Ingrese sus datos de envío</h1>
                        <FormLayout />
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
