import React,{useContext,useState} from 'react'
import userContext from '../context/User/userContext'
import {Link,useHistory,Redirect} from "react-router-dom"
import { Logo } from '../assets/images'
import {Alert} from "antd"
import "./login.css"

function Login() {

    const {loginUser,user,alertViewLogin,setAlertViewLogin,errorInputLogin}=useContext(userContext)
    const history=useHistory()
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
            setAlertViewLogin(true)
        }/*
        else
        {
            setErrorRegister(false)
            loginUser(inputs.email,inputs.password)
        }*/
        loginUser(inputs.email,inputs.password)

        if(errorInputLogin==="Logeado")
        {

            history.replace("")
            history.push("/")
            history.go("/")
        }
    }
    
    return (
        <div className="login">
            <div className="login__header">
                <Link to="/"><img src={Logo} alt="SOUND PERCEPTION" /></Link>
            </div>

            <div className="login__container">
                <div className="login__container__form">
                    <h1>LOGIN</h1>
                    {alertViewLogin && <Alert message={errorInputLogin} type={errorInputLogin==="Logeado" ? 'success' : 'error'}/>}
                    <form>
                        <input name="email" type="text" placeholder="Ingrese su correo" onChange={handleChange} value={inputs.email}/>
                        <br/>
                        <input name="password" type="password" placeholder="Ingrese su contraseña" onChange={handleChange} value={inputs.password}/>
                        <br/>
                        <Link to="/register"><h3>Registrarse</h3></Link>
                        <button onClick={handleClick}>Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
