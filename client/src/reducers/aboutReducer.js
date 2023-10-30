import axios from "axios"



export const getAbout=()=>{

    return async(dispatch)=>{
        dispatch({type:"GET_ABOUTS"})
        const response = await axios.get('https://university-server-5nor.onrender.com/api/abouts')

        if(response)
        {
            dispatch({type:'GET_ABOUTS_COMPLETED' , payload: response.data.data})
        }

        if(!response)
        {
            dispatch({type:'GET_ABOUTS_FAILED' })
        }
    }

}









const aboutReducer=(state={isLoading:false , aboutData:[] },action)=>{
    if(action.type==='GET_ABOUTS')
    {
        return {
            isLoading:true
        }
    }
    if(action.type==='GET_ABOUTS_COMPLETED')
    {
        return {
            isLoading:false,
            aboutData:action.payload
        }
    }
    if(action.type==='GET_ABOUTS_FAILED')
    {
        return {
            isLoading:false,
            aboutData:[]
        }
    }

    return state

}
export default aboutReducer;