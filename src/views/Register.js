import React,{useContext,useState,useEffect} from 'react'
import {Link,useHistory} from "react-router-dom"
import { Logo } from '../assets/images'
import userContext from '../context/User/userContext'
import {Alert} from "antd"
import "./login.css"

const Register = () => {
    const history=useHistory()
    const {registerUser,errorInput,alertView,setAlertView}=useContext(userContext)
    const [inputs,setInputs]=useState({
        email:'',
        password:''
    })
    
    const handleChange=(e)=>
    {
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    const handleClick=(e)=>
    {
        e.preventDefault()
        if(inputs.email==="" || inputs.password==="")
        {
            setAlertView(true)
        }/*
        else
        {
            setErrorRegister(false)
            loginUser(inputs.email,inputs.password)
        }*/
        registerUser(inputs.email,inputs.password)

        if(errorInput==="Registro hecho")
        {
            setTimeout(()=>{
                history.replace("") 
                history.push("/login")
            },1000)
        }
    }

    return (
        <div className="login">
            <div className="login__header">
                <Link to="/"><img src={Logo} alt="SOUND PERCEPTION" /></Link>
            </div>

            <div className="login__container">
                <div className="login__container__form">
                    <h1>REGISTER</h1>
                    {alertView && <Alert message={errorInput} type={errorInput==="Registro hecho" ? 'success' : 'error'}/>}
                    <form>
                        <input name="email" type="text" placeholder="Ingrese su correo" onChange={handleChange} value={inputs.email}/>
                        <br/>
                        <input name="password" type="password" placeholder="Ingrese su contraseña" onChange={handleChange} value={inputs.password}/>
                        <br/>
                        <Link to="/login"><h3>Log In</h3></Link>
                        <button onClick={handleClick}>Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
