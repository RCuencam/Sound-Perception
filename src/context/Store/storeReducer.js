import React,{useReducer} from "react"

const storeReducer=(state,action)=>
{
    const {type,payload}=action

    switch(type)
    {
        case 'ADD__PRODUCT':

            return [...state,payload]

        case 'REMOVE__PRODUCT':
            return state.filter((item)=>payload!==item.id)
        case 'DECREASE__AMOUNT':
            state.map((item)=>
            {
                if(item.stock>=action.amount)
                {
                    item.stock-=1
                }
            })
        case 'INCREASE__AMOUNT':
            state.map((item)=>
            {
                item.stock+=1
            })
        default:
            return state
    }
}

export default storeReducer