

import axios from "axios"


export const getContact=()=>{
    return async(dispatch)=>{

        dispatch({type:"GET_CONTACTS"})
        const response = await axios.get('http://localhost:8000/api/contacts')

        if(response)
        {
            dispatch({type:'GET_CONTACTS_COMPLETED' , payload: response.data.data})
        }

        if(!response)
        {
            dispatch({type:'GET_CONTACTS_FAILED' })
        }

    }
}


const contactReducer = (state={ isLoading : false , contactData:[]} , action)=>{

    if(action.type ==='GET_CONTACTS')
    {
        return {
            isLoading:true,
        }
    }

    if(action.type ==='GET_CONTACTS_COMPLETED')
    {
        return {
            isLoading:false,
            contactData:action.payload
        }
    }
    if(action.type ==='GET_CONTACTS_FAILED')
    {
        return {
            isLoading:false,
            contactData:[]
        }
    }
    return state
}

export default contactReducer