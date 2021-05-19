import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {db} from "../FirebaseConfig"
import CategoryList from '../components/CategoryList'
import StoreContext from '../context/Store/storeContext'
import "./listProducts.css"

const ListProducts = () => {
    
    const {category}=useParams()
    useEffect(()=>
    {
        return window.scrollTo(0,0)
    },[]) 
    return (
        <div className="list__products">
            <h1 className="list__products__title">{category}</h1>
            <CategoryList category={category} />
        </div>
    )
}

export default ListProducts