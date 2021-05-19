import React,{useState,useEffect} from 'react'
import {db} from "../FirebaseConfig"

const documentDatabase='jaPlEyfIwbOhLPrAaWpN'

const GetListProductsByCategory = (category,setLoading) => {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        const productsDB=db.collection('data').doc(documentDatabase).get()
        .then((categoryList)=>
        {
            //Aquí el .drums regresa toda la lista completa de todas las categorías. Me equivoqué en colocar el nombre "listProducts" en la base de datos
            setProducts(categoryList.data().drums)
            setLoading(false)
        }).catch((e)=>console.log(e))
    },[])


    return products.filter((item)=>item.type===category)
}

export default GetListProductsByCategory