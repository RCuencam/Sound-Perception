import {useState,useReducer} from "react"
import userContext from "./userContext";
import userReducer from "./userReducer";
import { auth } from "../../FirebaseConfig";

const UserProvider=({children})=>
{
    const [state,dispatch]=useReducer(userReducer,{})

    const [user,setUser]=useState({})

    const [errorInput,setErrorInput]=useState("")
    const [alertView,setAlertView]=useState(false)

    const [errorInputLogin,setErrorInputLogin]=useState("")
    const [alertViewLogin,setAlertViewLogin]=useState(false)

    const registerUser=(email,password)=>
    {
        auth.createUserWithEmailAndPassword(email,password).then(()=>{
            setErrorInput('Registro hecho')
            setAlertView(true)
        }).catch(e=>{
            setErrorInput(e.message)
            setAlertView(true)
        })
    }

    const loginUser=(email,password)=>
    {
        auth.signInWithEmailAndPassword(email,password).then((userCredential)=>setUser(userCredential)).then(()=>{
            setErrorInputLogin('Logeado')
            setAlertViewLogin(true)
        }).catch(e=>{
            setErrorInputLogin(e.message)
            setAlertViewLogin(true)
        })
    }
    return(
        <userContext.Provider value={{state,registerUser,loginUser,user,setUser,errorInput,alertView,setAlertView,alertViewLogin,setAlertViewLogin,errorInputLogin}}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider