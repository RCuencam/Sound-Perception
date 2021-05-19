import React, {useEffect,useReducer} from "react"
import {db} from "../../FirebaseConfig"
import storeContext from "./storeContext"
import storeReducer from "./storeReducer"

const Store=(props)=>
{
    const [data,dispatch]=useReducer(storeReducer,JSON.parse(localStorage.getItem('data'))||[])

    useEffect(()=>
    {
        localStorage.setItem('data',JSON.stringify(data))
    },[data])

    const addProduct=(newProduct)=>
    {
        try
        {
            dispatch({
                type:'ADD__PRODUCT',
                payload:newProduct
            })
        }catch(e)
        {
            console.log('error',e);
        }
    }
    const removeProduct=(id)=>
    {
        try
        {
            dispatch({
                type:'REMOVE__PRODUCT',
                payload:id
            })
        }catch(e)
        {
            console.log('error',e);
        }
    }
    return(
        <storeContext.Provider value={{
            data,
            addProduct,
            removeProduct
        }}>
            {props.children}
        </storeContext.Provider>
    )
}
export default Store
