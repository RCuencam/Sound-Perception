import { auth } from "../../FirebaseConfig"

const userReducer=(state,action)=>
{
    const {type,payload}=action

    switch(type)
    {
        case 'REGISTER':
            auth.createUserWithEmailAndPassword(payload.email,payload.password)
            .then((userCredential)=>
            {
                const user=userCredential.user
            })
            .catch((e)=>
            {
                
            })
        
        case 'SIGN_IN':
            auth.signInWithEmailAndPassword(payload.email,payload.pasword)
            .then((userCredential)=>
            {
                const user=userCredential.user
            })
            .catch((e)=>
            {
                console.log(e);
            })
        default:
            return state
    }
}

export default userReducer